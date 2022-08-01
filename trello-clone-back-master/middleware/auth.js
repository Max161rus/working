const db = require('../models');
const jwt = require('../utils/token');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // "Bearer TOKEN"

    const decoded = await jwt.verify(token);

    const user = await db.User.findOne({ where: { id: decoded.userId } });

    if (!user) {
      res.status(404).send('User not found');
    }

    req.currentUser = user;

    next();
  } catch (e) {
    if (e.message === 'jwt malformed') {
      res.status(401).send('token malformed');
    } else if (e.message === 'jwt expired') {
      res.status(401).send('token expired');
    } else {
      res.status(401).send('No authorization');
    }
  }
};
