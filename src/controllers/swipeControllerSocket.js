const validator = require('validator');
const jwt = require('jsonwebtoken');

const { Op } = require('sequelize');

const AppError = require('../utils/appError');
const { User } = require('../sequelize/models');
const { Swipe, Match } = require('../sequelize/models');

exports.createSwipe = async (socket, input) => {
  try {
    const { to:id,from:userId } = input;
    const isExist = await Swipe.findOne({
      where: { firstId: userId, secondId: id },
    });
    if (isExist) {
      throw new AppError('user with this id already swiped', 400);
    }
    const createdSwipe = await Swipe.create({
      firstId: userId,
      secondId: id,
    });
    const newSwipe = await Swipe.findOne({
      where: { id: createdSwipe.id },
      include: [
        {
          model: User,
          attributes: { exclude: 'password' },
          as: 'swipesecondId',
        },
        {
          model: User,
          attributes: { exclude: 'password' },
          as: 'swipefirstId',
        },
      ],
    });
    const isOtherSwipeMe = await Swipe.findOne({
      where: { secondId: userId, firstId: id },
    });
    if (isOtherSwipeMe && createdSwipe) {
      const createdMatch = await Match.create({
        firstId: userId,
        secondId: id,
      });
      return({ newSwipe, createdMatch });
    }
    return({ newSwipe });



  } catch (err) {
    console.log(err);
  }
};