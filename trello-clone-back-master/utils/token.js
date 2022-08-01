const jsonwebtoken = require('jsonwebtoken');
const config = require('../config');

const sign = (user) => {
  return jsonwebtoken.sign({ userId: user.id }, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
};

const verify = (token) => {
  return jsonwebtoken.verify(token, config.jwt.secret);
};

module.exports = {
  sign,
  verify,
};
