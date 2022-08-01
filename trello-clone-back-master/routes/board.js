const express = require('express');

const controller = require('../controllers/board');
const auth = require('../middleware/auth');

const boardRouter = express.Router();

boardRouter.use(auth);

boardRouter.get('/', controller.getList);
boardRouter.get('/:id', controller.getOne);
boardRouter.post('/', controller.create);
boardRouter.patch('/:id', controller.update);
boardRouter.delete('/:id', controller.remove);

module.exports = boardRouter;
