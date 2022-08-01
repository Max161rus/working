module.exports = async (req, res, next) => {
  try {
    if (req.currentUser.role !== 'admin') {
      return res.sendStatus(403);
    }

    next();
  } catch (e) {
    res.sendStatus(500);
  }
};
