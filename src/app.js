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
});


if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRoute);
app.use("/test",(req,res,next)=>{
  res.json("success")
})

app.use(notFound);
app.use(error);

const port = process.env.PORT || 8080;
// app.listen(port,'192.168.1.88', () => console.log(`server running on port: ${port}`));
server.listen(port,() => console.log(`server running on port: ${port}`));
