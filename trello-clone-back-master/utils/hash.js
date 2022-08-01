const crypto = require('crypto');
const config = require('../config');

module.exports = (password) => {
  return crypto
    .createHmac(config.hash.type, config.hash.key)
    .update(password.trim())
    .digest('hex');
};
