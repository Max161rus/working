const express = require('express');

const controller = require('../controllers/column');
const auth = require('../middleware/auth');

const columnRouter = express.Router();

columnRouter.use(auth);

columnRouter.post('/', controller.create);
columnRouter.patch('/:id', controller.update);
columnRouter.delete('/:id', controller.remove);

module.exports = columnRouter;
