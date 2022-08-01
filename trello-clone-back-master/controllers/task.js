const db = require('../models');
const emitter = require('../services/emitter');

const create = async (req, res, next) => {
  try {
    const { title, column_id } = req.body;

    const task = await db.Task.create({
      column_id,
      title,
    });

    res.status(201).json(task);
  } catch (err) {
    if (err.message === 'value too long for type character varying(255)') {
      res.status(400).send({ message: err.message });
    }
    next();
  }
};

const update = async (req, res, next) => {
  try {
    const {
      boardId,
      columnFromId,
      columnFromTitle,
      columnId,
      columnTitle,
      desc,
      senderId,
      senderName,
      taskTitle,
      title,
    } = req.body;

    const params = {
      where: {
        id: req.params.id,
      },
      returning: true,
    };

    const [, task] = await db.Task.update({
      title,
      column_id: columnId,
      desc,
    }, params);

    if (columnFromId) {
      emitter.emit('moveTask', ({
        boardId,
        taskTitle,
        columnTitle,
        columnFromTitle,
        senderId,
        senderName,
      }));
    }

    res.status(201).json(task);
  } catch (err) {
    if (err.message === 'value too long for type character varying(255)') {
      res.status(400).send({ message: err.message });
    }
    next();
  }
};

const remove = async (req, res, next) => {
  try {
    const params = {
      where: {
        id: req.params.id,
      },
      returning: true,
    };

    const isRemoved = await db.Task.destroy(params);

    if (!isRemoved) {
      return res.sendStatus(404);
    }

    res.sendStatus(204);
  } catch (err) {
    if (err.message.includes('is out of range')) {
      res.status(404).send({ message: err.message });
    }
    next();
  }
};

module.exports = {
  create,
  update,
  remove,
};
