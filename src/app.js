const { sequelize } = require('../src/sequelize/models');
// sequelize.sync({ alter: true });
// sequelize.sync({ force: true });

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const http = require('http');
const server = http.createServer(app);
const { Chat } = require('../src/sequelize/models');

const swipeRoute = require('./routes/swipeRoute');

const authRoute = require('./routes/authRoute');
const adminRoute = require('./routes/adminRoute');
const memberRoute = require('./routes/memberRoute');
const chatRoute = require('./routes/chatRoute');
const postRoute = require('./routes/postRoute');
const userImageRoute = require('./routes/userImageRoute');
const commentRoute = require('./routes/commentRoute');

// const friendRoute = require('./routes/friendRoute');
// const postRoute = require('./routes/postRoute');
// const userRoute = require('./routes/userRoute');

const notFound = require('./middlewares/notFound');
const error = require('./middlewares/error');
// const authenticate = require('./middlewares/authenticate');
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});
io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);

  // We can write our socket event listeners in here...
  socket.on('ping', () => {
    console.log('pong');
  });

  socket.on('sendMessage', (message) => {
    console.log(message);
    socket.broadcast.emit('receiveMessage', message);
  });
});

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
//=====================================================constance & local imported Zone
//=====================================================Encoding Zone
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/swipe', swipeRoute);
app.use('/auth', authRoute);
app.use('/member', memberRoute);
app.use('/chat', chatRoute);
app.use('/admin', adminRoute);
app.use('/post', postRoute);
app.use('/userImage', userImageRoute);
app.use('/comment', commentRoute);

app.use(notFound);
app.use(error);
//=====================================================Listening Zone

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on('addUser', (userId) => {
    addUser(userId, socket.id);
    io.emit('getUsers', users);
  });

  socket.on('sendMessage', async ({ senderId, receiverId, text }) => {
    const user = await getUser(receiverId);
    const newmessage = await Chat.create({
      chat: text,
      requestId: senderId,
      acceptId: receiverId,
    });

    io.to(user.socketId).emit('getMessage', {
      senderId,
      text,
    });
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected!');
    removeUser(socket.id);
    io.emit('getUsers', users);
  });

  // socket.on('join_room', (data) => {
  //   socket.join(data);
  //   console.log(`User with ID: ${socket.id} joined room: ${data}`);
  // });

  // socket.on('send_message', (data) => {
  //   console.log(data);
  //   socket.to(data.room).emit('receive_message', data);
  // });

  // socket.on('disconnect', () => {
  //   console.log('User Disconnected', socket.id);
  // });
});

const port = process.env.PORT || 8080;
// app.listen(port,'192.168.1.88', () => console.log(`server running on port: ${port}`));
server.listen(port, () => console.log(`server running on port: ${port}`));
