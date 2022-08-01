const express = require('express');

const controller = require('../controllers/user');
const auth = require('../middleware/auth');
const isOwner = require('../middleware/isOwner');
const isAdmin = require('../middleware/isAdmin');
const multer = require('../middleware/multer');

const userRouter = express.Router();

userRouter.use(auth);

userRouter.get('/', isAdmin, controller.getList);
userRouter.post('/', isAdmin, controller.create);
userRouter.patch('/:id', isOwner, controller.update);
userRouter.delete('/:id', isOwner, controller.remove);

userRouter.post('/:id/updateAvatar', isOwner, multer, controller.updateAvatar);
userRouter.patch('/:id/updatePassword', isOwner, controller.updatePassword);

module.exports = userRouter;
