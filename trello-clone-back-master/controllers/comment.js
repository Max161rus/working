const db = require('../models');
const emitter = require('../services/emitter');

const create = async (req, res, next) => {
  try {
    const {
      taskId,
      authorId,
      text,
      boardId,
      taskTitle,
      receiverId,
      senderName,
    } = req.body;

    const comment = await db.Comment.create({
      task_id: taskId,
      author_id: authorId,
      text,
    });

    if (receiverId) {
      emitter.emit('mentionComment', ({
        taskId,
        boardId,
        taskTitle,
        receiverId,
        senderName,
      }));
    }

    emitter.emit('newComment', ({ boardId, comment: comment.toJSON() }));

    res.status(201).json(comment);
  } catch (err) {
    if (err.message === 'value too long for type character varying(255)') {
      res.status(400).send({ message: 'Value too long' });
    }
    next();
  }
};

const update = async (req, res, next) => {
  try {
    const { text, boardId } = req.body;

    const [, comment] = await db.Comment.update({ text }, {
      where: {
        id: req.params.id,
      },
      returning: true,
    });

    emitter.emit('commentUpdated', ({ boardId, comment }));

    res.status(201).json(comment);
  } catch (err) {
    if (err.message === 'value too long for type character varying(255)') {
      res.status(400).send({ message: 'Value too long' });
    }
    next();
  }
};

const remove = async (req, res, next) => {
  try {
    const boardId = req.params.boardId;

    const isRemoved = await db.Comment.destroy({
      where: {
        id: req.params.id,
      },
      returning: true,
    });

    if (!isRemoved) {
      return res.status(404).send('Wrong comment id');
    }

    const commentId = req.params.id;

    emitter.emit('commentRemoved', ({ boardId, commentId }));

    res.sendStatus(204);
  } catch (err) {
    next();
  }
};

module.exports = {
  create,
  update,
  remove,
};
