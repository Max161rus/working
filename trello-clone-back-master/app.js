const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const socket = require('./services/io');

let app = express();

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const boardRouter = require('./routes/board');
const columnRouter = require('./routes/column');
const taskRouter = require('./routes/task');
const subscribeRouter = require('./routes/subscribe');
const commentRouter = require('./routes/comment');
const errorHandler = require('./middleware/errorHandler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use('/public', express.static('public'));

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/board', boardRouter);
app.use('/api/column', columnRouter);
app.use('/api/task', taskRouter);
app.use('/api/subscribe', subscribeRouter);
app.use('/api/comment', commentRouter);

app.use(errorHandler);

// must be placed last
app = socket(app);

module.exports = app;
