const cloudinary = require('../utils/cloudinary');

const { Op } = require('sequelize');

const AppError = require('../utils/appError');
const { User } = require('../sequelize/models');
const { Post, Like, Comment, sequelize } = require('../sequelize/models');

exports.createPost = async (req, res, next) => {
  try {
    const { text } = req.body;
    const userId = req.user.id;
    let image;

    if (req.files) {
      image = await cloudinary.upload(req.files.image[0].path);
    }
    console.log('****');
    console.log(image);
    console.log(text);
    if ((!text || !text.trim()) && (!image || !image.trim())) {
      throw new AppError(
        'Either image or text is required to create post',
        401
      );
    }
    if (!userId) {
      throw new AppError('User Id is required to create post', 401);
    }

    const createPost = await Post.create({
      text,
      image,
      userId,
    });
    const createdPost = await Post.findOne({
      where: { id: createPost.id },
      include: [
        {
          model: User,
          attributes: { exclude: 'password' },
        },
      ],
    });
    res.status(200).json({ createdPost });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getAllMyPosts = async (req, res, next) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      throw new AppError('User Id is required ', 401);
    }

    const allMyPosts = await Post.findAll({
      where: { userId: userId },
      include: [
        {
          model: User,
          attributes: { exclude: 'password' },
        },
      ],
    });
    res.status(200).json({ allMyPosts });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getAllMyMatchPosts = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const allMyMatch = await Match.findAll({
      where: { [Op.or]: [{ firstId: userId }, { secondId: userId }] },
      order: [['createdAt', 'DESC']],
    });
    const matchIds = allMyMatch.map((item) =>
      item.firstId === userId ? item.secondId : item.firstId
    );

    if (!userId) {
      throw new AppError('User Id is required ', 401);
    }

    const allMyMatchPosts = await Post.findAll({
      where: { userId: matchIds },
      include: [
        {
          model: User,
          attributes: { exclude: 'password' },
        },
      ],
    });
    res.status(200).json({ allMyMatchPosts });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
exports.getAllPosts = async (req, res, next) => {
  try {
    const allPosts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: { exclude: 'password' },
        },
      ],
    });
    res.status(200).json({ allPosts });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
exports.deletePostById = async (req, res, next) => {
  let t;
  try {
    t = await sequelize.transaction();
    const postId = req.params;
    const deletePost = await Post.findone({ where: { id: postId } });
    const deleteLike = await Like.findAll({ where: { postId: postId } });
    const deleteComment = await Comment.findAll({ where: { postId: postId } });
    await deleteLike.destroy({ transaction: t });
    await deleteComment.destroy({ transaction: t });
    await deletePost.destroy({ transaction: t });
    await t.commit();
    res.status(200).json({ deletePost, message: 'post is deleted' });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.editPostById = async (req, res, next) => {
  try {
    if (req.file) {
      const image = req.user.profileImage;
      const secureUrl = await cloudinary.upload(
        req.files.image[0].path,
        profileImage ? cloudinary.getPublicId(image) : undefined
      );
      updateValue.profileImage = secureUrl;
      fs.unlinkSync(req.files.profileImage[0].path);
    }
    const { updateData } = req.body;
    const userId = req.user.id;
    const postToUpdate = await Post.findOne({ where: { id: updateData.id } });
    if (postToUpdate.userId !== userId) {
      throw new AppError('Only post owner can Edit the post', 401);
    }
    await Post.update(updateData, { where: { id: updateData.id } });
    const editPost = await User.findOne({
      where: { id: updateData.id },
      include: [
        {
          model: User,
          attributes: { exclude: 'password' },
        },
      ],
    });
    res.status(200).json({ editPost });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
