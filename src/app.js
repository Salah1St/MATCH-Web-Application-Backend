// const { sequelize } = require("../src/sequelize/models");
// sequelize.sync({ alter: true }); 

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRoute = require("./routes/authRoute");
// const friendRoute = require('./routes/friendRoute');
// const postRoute = require('./routes/postRoute');
// const userRoute = require('./routes/userRoute');
const notFound = require("./middlewares/notFound");
const error = require("./middlewares/error");
// const authenticate = require('./middlewares/authenticate'); 
const app = express();
//=====================================================Imported Zone
//=====================================================constance & local imported Zone
const http = require('http')
const server = http.createServer(app)
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
    console.log("pong");
});

socket.on('sendMessage', (message) => { 
  
  
  console.log(message);
  socket.broadcast.emit('receiveMessage',message)
});
});


if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//=====================================================constance & local imported Zone
//=====================================================Encoding Zone
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//=====================================================Encoding Zone
//=====================================================Express Zone
app.use("/auth", authRoute);
app.use("/test",(req,res,next)=>{
  res.json("success")
})
//=====================================================Express Zone
//=====================================================Throwing Zone
app.use(notFound);
app.use(error);
//=====================================================Listening Zone

const port = process.env.PORT || 8080;
// app.listen(port,'192.168.1.88', () => console.log(`server running on port: ${port}`));
server.listen(port,() => console.log(`server running on port: ${port}`));
