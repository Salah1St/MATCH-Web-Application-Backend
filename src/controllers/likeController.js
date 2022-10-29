const validator = require('validator');
const jwt = require('jsonwebtoken');

const { Op } = require('sequelize');

const AppError = require('../utils/appError');
const { User } = require('../sequelize/models');
const { Like } = require('../sequelize/models');

// exports.createLike = async (req, res, next) => {
//   try {
//     const userId = req.user.id;
//     const { postId } = req.body;
//     const createdLike = await Like.create({ userId, postId });
//     const createdLikeRes = await Like.findOne({
//       where: { id: createdLike.id },
//       include: { model: User, attributes: { exclude: 'password' } },
//     });

//     res.status(200).json({ createdLikeRes });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

exports.getAllLikeByPostId = async (req, res, next) => {
  try {
    const { postId } = req.body;

    if (!postId) {
      throw new AppError('reference postId is required', 400);
    }

    const AllLikeRes = await Like.findAll({
      where: { postId },
      order: [['createdAt', 'DESC']],
      include: { model: User, attributes: { exclude: 'password' } },
    });

    res.status(200).json({ AllLikeRes });
  } catch (err) {
    next(err);
  }
};
exports.toggleLikeByPostId = async (req, res, next) => {
  try {
    const { postId } = req.body;
    const userId = req.user.id;

    if (!postId) {
      throw new AppError('postId  is required', 400);
    }
    const isLike = await Like.findOne({ where: { postId, userId } });
    let createLike;
    if (isLike) {
      res.status(200).json({ message: 'unliked', isLike });
      return await isLike.destroy();
    } else {
      createLike = await Like.create({ postId, userId });
    }

    const createdLikeRes = await Like.findOne({
      where: {
        id: createLike.id,
      },
    });

    res.status(200).json({ createdLikeRes });
  } catch (err) {
    next(err);
  }
};
