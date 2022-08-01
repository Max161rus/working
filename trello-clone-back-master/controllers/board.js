// const sequelize = require('sequelize');
const { Op } = require('sequelize');
const db = require('../models');

const create = async (req, res, next) => {
  try {
    const { title } = req.body;
    const ownerId = req.currentUser.id;

    const board = await db.Board.create({
      owner_id: ownerId,
      title,
    });

    res.status(201).json(board);
  } catch (err) {
    if (err.message === 'Validation error: Validation len on title failed') {
      res.status(400).send({ message: 'Validation error: The length of the title must not exceed 20 characters' });
    }
    next();
  }
};

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const board = await db.Board.findByPk(id, {
      include: [{
        model: db.Column,
        include: [{
          model: db.Task,
          include: [{
            model: db.Comment,
          }],
        }],
      }, {
        model: db.User,
        as: 'subscribers',
        attributes: ['id', 'fullName', 'avatar'],
      }],
    });

    if (!board) {
      return res.status(404).send({ message: 'Board not found' });
    }

    let isSubscriber;

    for (const subscriber of board.subscribers) {
      if (req.currentUser.id === subscriber.id) {
        isSubscriber = subscriber.id;
        break;
      }
    }

    if (
      req.currentUser.role !== 'admin'
      && req.currentUser.id !== board.owner_id
      && !isSubscriber
    ) {
      return res.sendStatus(403);
    }

    const members = await db.User.findAll({
      attributes: ['id', 'fullName', 'avatar', 'role'],
      order: [
        ['fullName', 'ASC'],
      ],
    });

    return res.json({ board, members });
  } catch (err) {
    next();
  }
};

const getList = async (req, res, next) => {
  try {
    const mainBoards = await db.Board.findAll({
      where: {
        owner_id: req.currentUser.id,
      },
    });

    let sharedBoards = await db.BoardSubscriber.findAll({
      where: {
        user_id: req.currentUser.id,
      },
    });

    const sharedBoardsId = sharedBoards.map((relation) => relation.board_id);

    if (sharedBoardsId.length !== 0) {
      sharedBoards = await db.Board.findAll({
        order: [
          ['updatedAt', 'ASC'],
        ],
        where: {
          id: {
            [Op.or]: sharedBoardsId,
          },
        },
      });
    } else {
      sharedBoards = [];
    }

    let adminBoards = null;
    if (req.currentUser.role === 'admin') {
      adminBoards = await db.Board.findAll({
        where: {
          owner_id: {
            [Op.not]: req.currentUser.id,
          },
        },
      });
    }

    return res.json({ mainBoards, sharedBoards, adminBoards });
  } catch (err) {
    next();
  }
};

const update = async (req, res, next) => {
  try {
    const { title, columnsOrder } = req.body;

    if (title && title.length >= 20) {
      return res.status(400).send({
        message: 'The title is longer than 20 characters',
      });
    }

    const params = {
      where: {
        id: req.params.id,
      },
      returning: true,
    };

    if (req.currentUser.role !== 'admin') {
      params.where.owner_id = req.currentUser.id;
    }

    const [, board] = await db.Board.update({ title, columns_order: columnsOrder }, params);

    if (!board) {
      return res.status(404).send({ message: 'Board not found' });
    }

    res.status(201).json(board);
  } catch (err) {
    next();
  }
};

// TODO Think errors
const remove = async (req, res, next) => {
  try {
    const params = {
      where: {
        id: req.params.id,
      },
      returning: true,
    };

    if (req.currentUser.role !== 'admin') {
      params.where.owner_id = req.currentUser.id;
    }

    const isRemoved = await db.Board.destroy(params);

    if (!isRemoved) {
      return res.status(404).send({ message: 'Board not found' });
    }

    res.sendStatus(204);
  } catch (err) {
    if (err.message.includes('is out of range')) {
      res.status(404).send({ message: 'Board number is out of range' });
    }
    next();
  }
};

module.exports = {
  create,
  getOne,
  getList,
  update,
  remove,
};
