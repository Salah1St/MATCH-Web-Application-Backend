const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Op } = require('sequelize');

const AppError = require('../utils/appError');
const { User } = require('../sequelize/models');
const { Chat } = require('../sequelize/models');

exports.getAllChatByUserId = async (req, res, next) => {
  try {
    const id = +req.params.id;
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
