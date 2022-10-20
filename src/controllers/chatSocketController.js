const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require('express');

const { Op } = require('sequelize');

const AppError = require('../utils/appError');
const { User } = require('../sequelize/models');
const { Chat } = require('../sequelize/models');
const { Server } = require('socket.io');
const http = require('http');
const app = express();
const server = http.createServer(app);



exports.chat = async (req, res, next) => {
  try {

    const io = new Server(server, {
        cors: {
          origin: 'http://localhost:3000',
          methods: ['GET', 'POST'],
        },
      });
      io.on('connection',async (socket) => {
        console.log(`User connected ${socket.id}`);
        const userId = await fetchUserId(socket);
        // We can write our socket event listeners in here...
        socket.on('ping', () => {
          console.log("pong");
      });
      
      socket.on('sendMessage', (message) => { 
        
        
        console.log(message);
        io.emit('receiveMessage',message)
      });
      });






  } catch (err) {
    console.log(err);
    next(err);
  }
};
exports.fetchFriends = async (req, res, next) => {
    try {  
        const {userId} = req.body 
        console.log(req.body ,"=========================================================");
        if(!userId){
          next(error)
      
        }
        const users = await User.findAll({ where: { [Op.not]: [ { id: userId } ] } });
        res.json(users);
  
    } catch (err) {
      console.log(err);
      next(err);
    }
  };