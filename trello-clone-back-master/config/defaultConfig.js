module.exports = {
  development: {
    domain: 'http://localhost:4000',
    port: 4000,
    jwt: {
      secret: 'enter your secret here',
      expiresIn: '100h',
    },
    hash: {
      type: 'md5',
      key: 'HkRGfo',
    },
  },
};
