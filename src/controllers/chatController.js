const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Op } = require('sequelize');

const AppError = require('../utils/appError');
const { User } = require('../sequelize/models');
const { Chat } = require('../sequelize/models');


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
    const {friendsId} = req.body
    const check = (userid<friendsId)
    let userChat 
    if(check){
      const userChat = await ChatRoom.findAll({
        where: {
          [Op.or]: [
            { userLowerId: userid },
            { userHigherId: userid },
          ],
        },
        order: [['updatedAt', 'DESC']],
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
    }
    else{

    }


   




  } catch (err) {
    console.log(err);
    next(err);
  }
};