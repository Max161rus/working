const db = require('../models');
const hash = require('../utils/hash');
const authToken = require('../utils/token');

const register = async (req, res, next) => {
  try {
    const { fullName, email, password, birthday, role } = req.body;

    if (password === '') {
      return res.status(400).send({ message: 'Empty Password' });
    }

    if (password.length < 3) {
      return res.status(400).send({ message: 'Password length must be within 3 to 20 characters' });
    }

    let user = await db.User.create({
      fullName,
      email,
      password: hash(password),
      birthday,
      role,
    });

    const token = authToken.sign(user);

    user = user.toJSON();
    delete user.password;

    res.status(201).json({ user, token });
  } catch (err) {
    if (err.errors && err.errors[0].message === 'email must be unique') {
      res.status(400).send({ message: 'User with this email is already registered' });
    }
    if (err.message === 'Validation error: Validation isEmail on email failed') {
      res.status(400).send({ message: err.message });
    }

    next(err);
  }
};

const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = await db.User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).send({ email: 'User not found' });
    }

    const token = authToken.sign(user);

    user = user.toJSON();

    if (user.password !== hash(password)) {
      return res.status(400).send({ password: 'Invalid password' });
    }

    delete user.password;

    res.status(202).json({ user, token });
  } catch (err) {
    next();
  }
};

const check = async (req, res, next) => {
  try {
    const user = req.currentUser.toJSON();
    delete user.password;

    res.json(user);
  } catch (err) {
    next();
  }
};

module.exports = {
  register,
  signIn,
  check,
};
