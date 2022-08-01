const express = require('express');

const controller = require('../controllers/task');
const auth = require('../middleware/auth');

const taskRouter = express.Router();

taskRouter.use(auth);

taskRouter.post('/', controller.create);
taskRouter.patch('/:id', controller.update);
taskRouter.delete('/:id', controller.remove);

module.exports = taskRouter;
