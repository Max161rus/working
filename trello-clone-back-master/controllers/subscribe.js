/* eslint-disable no-restricted-syntax */
const db = require('../models');
const emitter = require('../services/emitter');

const subscribe = async (req, res, next) => {
  try {
    const { subscriberId } = req.body;

    db.BoardSubscriber.create({ // eslint-disable-line no-await-in-loop
      user_id: subscriberId,
      board_id: req.params.id,
    }, {
      attributes: ['id', 'fullName', 'avatar'],
    });

    try {
      emitter.emit('subscribe', ({ subscriberId, boardId: req.params.id }));
    } catch {}
    res.sendStatus(201);
  } catch (err) {
    next();
  }
};

const unsubscribe = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const boardId = req.params.boardId;

    const isRemoved = db.BoardSubscriber.destroy({ // eslint-disable-line no-await-in-loop
      where: {
        user_id: userId,
        board_id: boardId,
      },
      returning: true,
    });

    if (!isRemoved) {
      return res.sendStatus(404);
    }

    try {
      emitter.emit('unsubscribe', ({ subscriberId: userId, boardId }));
    } catch {}

    res.sendStatus(204);
  } catch (err) {
    next();
  }
};

module.exports = {
  subscribe,
  unsubscribe,
};
