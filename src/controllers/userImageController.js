const cloudinary = require('../utils/cloudinary');

// const { Op } = require("sequelize");

const AppError = require('../utils/appError');
const { User, UserImage } = require('../sequelize/models');

exports.createImage = async (req, res, next) => {
  try {
    console.log(req.files);
    const userId = req.user.id;

    const file = req.files.image;
    let url;

    if (file) {
      const newUrl = await cloudinary.upload(file[0].path);
      url = newUrl;
    } else {
      throw new AppError('Please send the image', 400);
    }

    const createdUrl = await UserImage.create({
      userId,
      url,
    });

    const createdImage = await UserImage.findOne({
      where: { id: createdUrl.id },
      include: { model: User, attributes: { exclude: 'password' } },
    });
    res.status(200).json({ createdImage });
  } catch (err) {
    next(err);
  }
};

exports.getUserImageByUserId = async (req, res, next) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      throw new AppError('userId is required', 400);
    }

    const userImages = await UserImage.findAll({
      where: { userId },
      order: [['createdAt', 'DESC']],
      include: { model: User, attributes: { exclude: 'password' } },
    });

    res.status(200).json({ userImages });
  } catch (err) {
    next(err);
  }
};

exports.deleteUserImagebyuserImageId = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { userImageId } = req.body;
    if (!userId) {
      throw new AppError('userId is required', 400);
    }

    const postTobeDelete = await UserImage.findOne({
      where: { id: userImageId },
    });
    if (userId !== postTobeDelete.userId) {
      throw new AppError('only the owner of the image can delete', 400);
    }
    await postTobeDelete.destroy();

    res.status(200).json({ message: 'image is deleted' });
  } catch (err) {
    next(err);
  }
};
