const { sequelize } = require("../src/sequelize/models");
// sequelize.sync({ alter: true });
// sequelize.sync({ force: true });

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const http = require("http");
const server = http.createServer(app);
const { Chat } = require("../src/sequelize/models");

const swipeRoute = require("./routes/swipeRoute");

const authRoute = require("./routes/authRoute");
const adminRoute = require("./routes/adminRoute");
const memberRoute = require("./routes/memberRoute");
const chatRoute = require("./routes/chatRoute");
const postRoute = require("./routes/postRoute");
const userImageRoute = require("./routes/userImageRoute");
const commentRoute = require("./routes/commentRoute");
const likeRoute = require("./routes/likeRoute");

// const friendRoute = require('./routes/friendRoute');
// const postRoute = require('./routes/postRoute');
// const userRoute = require('./routes/userRoute');

const notFound = require("./middlewares/notFound");
const error = require("./middlewares/error");
// const authenticate = require('./middlewares/authenticate');

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//=====================================================constance & local imported Zone
//=====================================================Encoding Zone
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/swipe", swipeRoute);
app.use("/auth", authRoute);
app.use("/member", memberRoute);
app.use("/chat", chatRoute);
app.use("/admin", adminRoute);
app.use("/post", postRoute);
app.use("/userImage", userImageRoute);
app.use("/comment", commentRoute);
app.use("/like", likeRoute);

app.use(notFound);
app.use(error);
//=====================================================Listening Zone

const port = process.env.PORT || 8080;
// app.listen(port,'192.168.1.88', () => console.log(`server running on port: ${port}`));
// server.listen(port, () => console.log(`server running on port: ${port}`));
module.exports = server;
