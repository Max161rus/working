const express = require('express');

const controller = require('../controllers/comment');
const auth = require('../middleware/auth');

const commentRouter = express.Router();

commentRouter.use(auth);

commentRouter.post('/', controller.create);
commentRouter.patch('/:id', controller.update);
commentRouter.delete('/:id/:boardId', controller.remove);

module.exports = commentRouter;
