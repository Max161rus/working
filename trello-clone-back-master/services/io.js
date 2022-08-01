const socketio = require('socket.io');
const http = require('http');
const db = require('../models');
// const getSocket = require('../utils/getSocket');
const emitter = require('./emitter');

module.exports = (app) => {
  const server = http.createServer(app);
  const io = socketio(server);
  const joinedUsers = {};

  const getSocket = (userId) => {
    const sockets = Object.values(joinedUsers);

    let socket;

    for (const joinedUser of sockets) {
      if (joinedUser.id === +userId) {
        socket = joinedUser.socket;
        break;
      }
    }

    return socket;
  };

  emitter.on('mentionComment', (data) => {
    const receiverSocket = getSocket(data.receiverId);

    if (receiverSocket.id) {
      io.to(receiverSocket.id).emit('mentionComment', {
        receiverId: data.receiverId,
        senderName: data.senderName,
        taskTitle: data.taskTitle,
        boardId: data.boardId,
        taskId: data.taskId,
      });
    }
  });

  emitter.on('moveTask', (data) => {
    io.to(data.boardId).emit('moveTask', {
      boardId: data.boardId,
      taskTitle: data.taskTitle,
      columnTitle: data.columnTitle,
      columnFromTitle: data.columnFromTitle,
      senderId: data.senderId,
      senderName: data.senderName,
    });
  });

  emitter.on('newComment', (data) => {
    io.to(data.boardId).emit('newComment', { comment: data.comment });
  });

  emitter.on('commentUpdated', (data) => {
    io.to(data.boardId).emit('commentUpdated', data.comment);
  });

  emitter.on('commentRemoved', (data) => {
    io.to(data.boardId).emit('commentRemoved', data.commentId);
  });

  emitter.on('subscribe', (data) => {
    getSocket(data.subscriberId).join(data.boardId);
  });

  emitter.on('unsubscribe', (data) => {
    getSocket(data.subscriberId).leave(data.boardId);
  });

  io.on('connection', (socket) => {
    socket.on('join', async (userId) => {
      let mainBoards = await db.Board.findAll({
        where: { owner_id: userId },
      });

      mainBoards = JSON.parse(JSON.stringify(mainBoards)).map((board) => board.id);

      let sharedBoards = await db.BoardSubscriber.findAll({
        where: { user_id: userId },
      });

      sharedBoards = JSON.parse(JSON.stringify(sharedBoards)).map((board) => board.board_id);

      // example [1, 3, 5]
      const boards = mainBoards.concat(sharedBoards);

      boards.forEach((board) => {
        socket.join(board);
      });

      joinedUsers[socket.id] = { socket, id: userId };
    });

    socket.on('disconnect', () => {
      delete joinedUsers[socket.id];
    });
  });

  return server;
};
