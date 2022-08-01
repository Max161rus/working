module.exports = async (req, res, next) => {
  try {
    if (
      req.currentUser.role !== 'admin' &&
      (+req.params.id !== req.currentUser.id)
    ) {
      return res.sendStatus(403);
    }

    next();
  } catch (e) {
    res.sendStatus(500);
  }
};
