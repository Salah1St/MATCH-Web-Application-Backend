const server = require("./app");
const { Server } = require('socket.io');
const { instrument } = require("@socket.io/admin-ui");
const chalk = require('chalk')


const io = new Server(server, {
  cors: {
    origin: ["https://admin.socket.io", 'http://localhost:3000','https://2bbd-183-89-154-116.ap.ngrok.io'],
    credentials: true,
    methods: ['GET', 'POST'],
  },
});
instrument(io, {
  auth: false
});
const onlineUser = {}
io.use((socket, next) => {
  const userId = socket.handshake.auth.myId;
  console.log("object");
  if (!userId) {
    console.log(chalk.red('error connect'));
    return next(new Error("invalid username"));
  }
  socket.userId = userId
  onlineUser[userId] = socket.id
  console.log(chalk.greenBright(`online : ${Object.keys(onlineUser).length}`));
  console.log(chalk.greenBright(`User connected ${socket.id}`));
  console.log(onlineUser);
  next();
});

io.on('connection', async (socket) => {
  io.emit('onlinefriends', Object.keys(onlineUser))

  socket.on('join_room', function (roomName) {
    socket.join(roomName);
    console.log(socket.rooms, "1");

  });


  socket.on('sendMessage', input => {
    console.log(input);

    socket.to(onlineUser[input?.to]).emit('receiveMessage', input)
    // io.to(onlineUser[input?.senderId]).emit('receiveMessage', input)
  })

  // socket.on('sendMessage', (message) => {
  //   console.log(socket.rooms);
  //   socket.join('new')
  //   console.log(socket.rooms, "1");
  //   console.log(message);
  //   io.emit('receiveMessage', message)
  // });

  socket.on('disconnect', () => {
    delete onlineUser[socket.userId]
    console.log(onlineUser);
    io.emit('onlinefriends', Object.keys(onlineUser))
    console.log('User Disconnected', socket.id, socket.userId, "userId");
  });
});

const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`server running on port: ${port}`));




// let users = [];

// const addUser = (userId, socketId) => {
//   !users.some((user) => user.userId === userId) &&
//     users.push({ userId, socketId });
// };

// const removeUser = (socketId) => {
//   users = users.filter((user) => user.socketId !== socketId);
// };

// const getUser = (userId) => {
//   return users.find((user) => user.userId === userId);
// };

// io.on('connection', (socket) => {
//   console.log(`User Connected: ${socket.id}`);

//   socket.on('addUser', (userId) => {
//     addUser(userId, socket.id);
//     io.emit('getUsers', users);
//   });

//   socket.on('sendMessage', async ({ senderId, receiverId, text }) => {
//     const user = await getUser(receiverId);
//     const newmessage = await Chat.create({
//       chat: text,
//       equestId: senderId,
//       acceptId: receiverId,
//     });

//     io.to(user.socketId).emit('getMessage', {
//       senderId,
//       text,
//     });
//   });

//   socket.on('disconnect', () => {
//     console.log('a user disconnected!');
//     removeUser(socket.id);
//     io.emit('getUsers', users);
//   });

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
// });
