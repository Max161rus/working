const express = require('express');

const controller = require('../controllers/auth');
const auth = require('../middleware/auth');

const authRouter = express.Router();

authRouter.post('/signIn', controller.signIn);
authRouter.post('/register', controller.register);
authRouter.get('/check', auth, controller.check);

module.exports = authRouter;
