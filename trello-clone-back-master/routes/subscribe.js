const express = require('express');

const controller = require('../controllers/subscribe');
const auth = require('../middleware/auth');

const subscribeRouter = express.Router();

subscribeRouter.use(auth);

subscribeRouter.post('/:id', controller.subscribe);
subscribeRouter.delete('/:userId/:boardId', controller.unsubscribe);

module.exports = subscribeRouter;
