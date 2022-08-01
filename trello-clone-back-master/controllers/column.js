const db = require('../models');

const create = async (req, res, next) => {
  try {
    const { title, board_id } = req.body;

    if (!board_id) {
      return res.status(400).send({ message: 'Missing board id' });
    }

    if (title.length > 20) {
      res.status(400).send({ message: 'The title is longer than 20 characters' });
    }

    const column = await db.Column.create({
      board_id,
      title,
    });

    res.status(201).json(column);
  } catch (err) {
    if (err.message === 'Columns_board_id_fkey') {
      return res.status(404).send({ message: 'Wrong board id' });
    }
    next();
  }
};

const update = async (req, res, next) => {
  try {
    const { title, tasks_order } = req.body;

    if (title && title.length > 20) {
      res.status(400).send({ message: 'The title is longer than 20 characters' });
    }

    const params = {
      where: {
        id: req.params.id,
      },
      returning: true,
    };

    const [, column] = await db.Column.update({ title, tasks_order }, params);

    if (column.length === 0) {
      return res.status(404).send({ message: 'Wrong column id' });
    }

    res.status(201).json(column);
  } catch (err) {
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

    const isRemoved = await db.Column.destroy(params);

    if (!isRemoved) {
      return res.sendStatus(404).send({ message: 'Column not found' });
    }

    res.sendStatus(204);
  } catch (err) {
    if (err.message.includes('is out of range')) {
      res.sendStatus(404).send({ message: 'Column id is out of range' });
    }
    next();
  }
};

module.exports = {
  create,
  update,
  remove,
};
