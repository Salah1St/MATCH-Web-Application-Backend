const validator = require('validator');
const jwt = require('jsonwebtoken');

const { Op } = require('sequelize');

const AppError = require('../utils/appError');
const { User } = require('../sequelize/models');
const { Swipe, Match } = require('../sequelize/models');

exports.getAllSwipedMe = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const wholikeme = await Swipe.findAll({
      where: { secondId: userId },
      order: [['createdAt', 'DESC']],
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
    res.status(200).json({ wholikeme });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
exports.getAllMySwipe = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const whoILike = await Swipe.findAll({
      where: { firstId: userId },
      order: [['createdAt', 'DESC']],
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
    res.status(200).json({ whoILike });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
exports.createSwipe = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { id } = req.body;
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
      res.status(200).json({ newSwipe, createdMatch });
      return;
    }
    res.status(200).json({ newSwipe });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
exports.fetchFriendsNearMe = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const friends = await User.findAll({
      where: {
        id: { [Op.ne]: userId },
      },
      order: [['id', 'DESC']],
      attributes:{exclude:['password']}
    });

    res.status(200).json( friends );
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.swipeRight = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const friends = await Swipe.crate();

    res.status(200).json( friends );
  } catch (err) {
    console.log(err);
    next(err);
  }
};
exports.fetchMatch = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const friendsMatch = await Match.findAll({
      where: {firstId: userId },
      order: [['createdAt', 'DESC']],
      include: [{model: User,
                 attributes: { exclude: 'password' },
                as: 'mysecondId',
               },]
    });

    const myMatch = await Match.findAll({
      where: { secondId: userId},
      order: [['createdAt', 'DESC']],
      include: [{model: User,
                attributes: { exclude: 'password' },
                as: 'myfirstId',
                },]
    });

    const output = [...friendsMatch.map((i,d)=>({matchId:i.id,matchFriends:i.mysecondId})),...myMatch.map((i,d)=>({matchId:i.id,matchFriends:i.myfirstId}))]

    res.status(200).json( output );
  } catch (err) {
    console.log(err);
    next(err);
  }
};