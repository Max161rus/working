const { Op } = require('sequelize');
const db = require('../models');
const hash = require('../utils/hash');

const create = async (req, res, next) => {
  try {
    const { fullName, email, password, birthday, role } = req.body;

    let user = await db.User.create({
      fullName,
      email,
      password: hash(password),
      birthday,
      role,
    });

    user = user.toJSON();
    delete user.password;

    res.status(201).json(user);
  } catch (err) {
    if (err.message === 'Validation error: Validation len on password failed') {
      return res.status(400).send({ message: err.message });
    }
    next();
  }
};

const getList = async (req, res, next) => {
  try {
    const {
      pageSize,
      page,
      orderBy,
      orderDirection,
      search,
    } = req.query;

    const params = {
      attributes: { exclude: ['password'] },
      limit: pageSize || null,
      offset: page ? ((page - 1) * pageSize) : null,
      order: [
        [orderBy || 'id', orderDirection || 'ASC'],
      ],
    };

    if (search) {
      params.where = {
        [Op.or]: [{
          fullName: {
            [Op.substring]: search,
          },
        }, {
          email: {
            [Op.substring]: search,
          },
        }],
      };
    }

    const users = await db.User.findAll(params);

    const totalCount = search ? users.length : await db.User.count();
    res.send({ data: users, totalCount });
  } catch (err) {
    next();
  }
};

const update = async (req, res, next) => {
  try {
    const { fullName, email, birthday } = req.body;

    let role = null;
    if (req.currentUser.role === 'admin') {
      role = req.body.role;
    }

    let { password } = req.body;
    if (password) {
      password = hash(password);
    }

    let user = await db.User.update({
      fullName,
      email,
      password,
      birthday,
      role,
    }, {
      where: {
        id: req.params.id,
      },
      returning: true,
      plain: true,
    });

    user = user[1].toJSON();
    delete user.password;

    res.status(201).json(user);
  } catch (err) {
    if (err.message === 'Validation error: Validation isEmail on email failed') {
      res.status(400).send({ email: 'Invalid email' });
    } else if (err.errors && err.errors[0].message === 'email must be unique') {
      res.status(400).send({ email: 'User with this email is already registered' });
    }
    next();
  }
};

const updatePassword = async (req, res, next) => {
  try {
    const { newPassword } = req.body;
    let { oldPassword } = req.body;

    const oldUser = await db.User.findByPk(req.params.id);

    oldPassword = hash(oldPassword);

    if (oldPassword !== oldUser.password) {
      res.sendStatus(400);
    }

    const password = hash(newPassword);

    let user = await db.User.update({
      password,
    }, {
      where: {
        id: req.params.id,
      },
      returning: true,
      plain: true,
    });

    user = user[1].toJSON();
    delete user.password;

    res.status(201).json(user);
  } catch (err) {
    next();
  }
};

const updateAvatar = async (req, res, next) => {
  try {
    let user = await db.User.update({
      avatar: req.file.path,
    }, {
      where: {
        id: req.params.id,
      },
      returning: true,
      plain: true,
    });

    user = user[1].toJSON();
    delete user.password;

    return res.status(200).send(user);
  } catch (err) {
    next();
  }
};

const remove = async (req, res, next) => {
  try {
    const isRemoved = await db.User.destroy({
      where: {
        id: req.params.id,
      },
      returning: true,
    });

    if (!isRemoved) {
      return res.sendStatus(404);
    }

    res.sendStatus(204);
  } catch (err) {
    if (err.message.includes('is out of range')) {
      res.sendStatus(404);
    }
    next();
  }
};

module.exports = {
  getList,
  create,
  update,
  updateAvatar,
  updatePassword,
  remove,
};
