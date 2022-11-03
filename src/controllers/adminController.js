const cloudinary = require('../utils/cloudinary');
const { Interest } = require('../sequelize/models');
const AppError = require('../utils/appError');
const fs = require('fs');

exports.createInterest = async (req, res, next) => {
  try {
    const user = req.user;
    const { ...updateValue } = req.body;

    if (user.role !== 'admin') {
      throw new AppError('you are not admin');
    }

    if (!req.files.icon) {
      throw new AppError('icon is required', 400);
    }
    if (!req.files.interestImage) {
      throw new AppError('image is required', 400);
    }
    if (!updateValue.text) {
      throw new AppError('text is required', 400);
    }

    const data = {};
    if (updateValue.text) {
      data.text = updateValue.text;
    }
    if (updateValue.description) {
      data.description = updateValue.description;
    }

    if (req.files.icon) {
      data.icon = await cloudinary.upload(req.files.icon[0].path);
    }
    if (req.files.interestImage) {
      data.interestImage = await cloudinary.upload(
        req.files.interestImage[0].path
      );
    }

    if (user.role) {
      data.adminId = user.id;
    }

    const interest = await Interest.create(data);
    res.status(201).json({ interest });
  } catch (err) {
    next(err);
  } finally {
    if (req.files.icon) {
      fs.unlinkSync(req.files.icon[0].path);
    }
    if (req.files.interestImage) {
      fs.unlinkSync(req.files.interestImage[0].path);
    }
  }
};

exports.deleteInterest = async (req, res, next) => {
  try {
    const user = req.user;
    const { id } = req.params;
    if (user.role !== 'admin') {
      throw new AppError('you are not admin', 400);
    }

    const deleteInterest = await Interest.findOne({ where: { id: id } });
    if (!deleteInterest) {
      throw new AppError('cannot delete product', 400);
    }

    await deleteInterest.destroy();
    res.status(200).json({ message: 'delete successfully' });
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const user = req.user;

    const allInterest = await Interest.findAll();
    res.status(200).json({ allInterest: allInterest });
  } catch (err) {
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const user = req.user;
    if (user.role !== 'admin') {
      throw new AppError('you are not admin');
    }
    const { id } = req.params;
    const oneInterest = await Interest.findOne({ where: { id: id } });
    if (!oneInterest) {
      throw new AppError('not found this id', 400);
    }
    res.status(200).json({ oneInterest: oneInterest });
  } catch (err) {
    next(err);
  }
};

exports.updateInterest = async (req, res, next) => {
  try {
    const user = req.user;
    const { ...updateValue } = req.body;
    const { id } = req.params;

    if (user.role !== 'admin') {
      throw new AppError('you are not admin');
    }

    if (req.files.icon) {
      const icon = req.user.icon;

      const newUrl = await cloudinary.upload(
        req.files.icon[0].path,
        icon ? cloudinary.getPublicId(icon) : null
      );
      updateValue.icon = newUrl;
      fs.unlinkSync(req.files.icon[0].path);
    }
    if (req.files.interestImage) {
      const interestImage = req.user.interestImage;

      const newUrl = await cloudinary.upload(
        req.files.interestImage[0].path,
        interestImage ? cloudinary.getPublicId(interestImage) : null
      );
      updateValue.interestImage = newUrl;
      fs.unlinkSync(req.files.interestImage[0].path);
    }

    await Interest.update(updateValue, { where: { id } });

    const allInterest = await Interest.findAll();
    res.status(200).json({ allInterest: allInterest });
  } catch (err) {
    next(err);
  }
};
