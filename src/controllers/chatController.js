const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Op } = require('sequelize');

const AppError = require('../utils/appError');
const { User,ChatMessage,Chat,ChatRoom } = require('../sequelize/models');


exports.getAllChatByUserId = async (req, res, next) => {
  try {
    const id = req.user.id;
    const { otherId } = req.body;
    const userChat = await Chat.findAll({
      where: {
        [Op.or]: [
          { acceptId: id, requestId: otherId },
          { acceptId: otherId, requestId: id },
        ],
      },
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: User,

          attributes: { exclude: 'password' },
          as: 'myacceptId',
        },
        {
          model: User,

          attributes: { exclude: 'password' },
          as: 'myrequestId',
        },
      ],
    });
    res.status(200).json({ userChat });
  } catch (err) {
    console.log(err);
    next(err);
  }
};


exports.addMessage = async (req, res, next) => {
  try {
    console.log(req.body,'body');
    await ChatMessage.create(req.body)



  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.createRoom = async (req, res, next) => {
  try {




  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getFriendsRoom = async (req, res, next) => {
  try {
    const userid = req.user.id;
   
     const userLowerChat = await ChatRoom.findAll({
        where: { userLowerId: userid },
        order: [['updatedAt', 'DESC']],
        include: 
          [{
            model: User,  
            as: 'myhigherId',
            attributes: { exclude: 'password' },
          }, {
            model: ChatMessage,
            order: [['updatedAt', 'DESC']],
            limit: 1,
            include: [{model: User,attributes:["username",'profileImage']}],
          },]
        
      });
      const userHigherChat = await ChatRoom.findAll({
        where: { userHigherId: userid },
        order: [['updatedAt', 'DESC']],
        include: 
          [{
            model: User,  
            as: 'mylowerId',
            attributes: { exclude: 'password' },
          }, {
            model: ChatMessage,
            order: [['updatedAt', 'DESC']],
            limit: 1,
            include: [{model: User,attributes:["username",'profileImage']}],
          },]
        
      });


      res.status(200).json([ ...userLowerChat , ...userHigherChat]  )

  } catch (err) {
    console.log(err);
    next(err);
  }
};