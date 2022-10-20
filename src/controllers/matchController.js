const validator = require('validator');
const jwt = require('jsonwebtoken');

const { Op } = require('sequelize');

const AppError = require('../utils/appError');
const { User } = require('../sequelize/models');
const { Swipe, Match } = require('../sequelize/models');

exports.getAllMyMatch = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const allMyMatch = await Match.findAll({
      where: { [Op.or]: [{ firstId: userId }, { secondId: userId }] },
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: User,
          attributes: { exclude: 'password' },
          as: 'myfirstId',
        },
        {
          model: User,
          attributes: { exclude: 'password' },
          as: 'mysecondId',
        },
      ],
    });

    res.status(200).json({ allMyMatch });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
exports.getAllMyMatchUser = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const allMyMatch = await Match.findAll({
      where: { [Op.or]: [{ firstId: userId }, { secondId: userId }] },
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: User,
          attributes: { exclude: 'password' },
          as: 'myfirstId',
        },
        {
          model: User,
          attributes: { exclude: 'password' },
          as: 'mysecondId',
        },
      ],
    });

    const matchUser = [];

    res.status(200).json({ allMyMatch });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
