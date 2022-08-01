module.exports = (err, req, res, next) => {
  res.status(err.status || 500).send({ message: 'Something went wrong' });
  next();
};
