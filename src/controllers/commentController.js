const cloudinary = require('../utils/cloudinary');

// const { Op } = require("sequelize");

const AppError = require('../utils/appError');
const { User, Comment } = require('../sequelize/models');

exports.createComment = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { content, postId } = req.body;

    if (!content || content.trim() === '') {
      throw new AppError('No centent', 400);
    }
    if (!postId) {
      throw new AppError('reference postId is required', 400);
    }

    const createdComment = await Comment.create({
      postId,
      content,
      userId,
    });
    const createCommentRes = await Comment.findOne({
      where: { id: createdComment.id },
      order: [['createdAt', 'DESC']],
      include: { model: User, attributes: { exclude: 'password' } },
    });

    res.status(200).json({ createCommentRes });
  } catch (err) {
    next(err);
  }
};
exports.getAllCommentByPostId = async (req, res, next) => {
  try {
    const { postId } = req.body;

    if (!postId) {
      throw new AppError('reference postId is required', 400);
    }

    const AllCommentRes = await Comment.findAll({
      where: { postId },
      order: [['createdAt', 'DESC']],
      include: { model: User, attributes: { exclude: 'password' } },
    });

    res.status(200).json({ AllCommentRes });
  } catch (err) {
    next(err);
  }
};
exports.deleteCommentById = async (req, res, next) => {
  try {
    const { commentId } = req.body;
    const userId = req.user.id;

    if (!commentId) {
      throw new AppError('commentId  is required', 400);
    }
    const commentToBeDelete = await Comment.findOne({
      where: { id: commentId },
    });
    if (!commentToBeDelete) {
      throw new AppError('cant find the comment', 400);
    }
    if (commentToBeDelete.userId !== userId) {
      throw new AppError(
        'owner the owner of comment can delete the comment',
        400
      );
    }
    await commentToBeDelete.destroy();

    res.status(200).json({ message: 'Comment is deleted' });
  } catch (err) {
    next(err);
  }
};
