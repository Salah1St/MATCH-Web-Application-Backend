const cloudinary = require("../utils/cloudinary");
const { Interest } = require("../sequelize/models");
const AppError = require("../utils/appError");
const fs = require("fs");

exports.createInterest = async (req, res, next) => {
  try {
    const user = req.user;
    const { text } = req.body;

    if (user.role !== "admin") {
      throw new AppError("you are not admin");
    }

    if (!req.file) {
      throw new AppError("image is required", 400);
    }

    const data = {};
    if (text) {
      data.text = text;
    }

    if (req.file) {
      data.icon = await cloudinary.upload(req.file.path);
    }

    if (user.role) {
      data.adminId = user.id;
    }

    const interest = await Interest.create(data);
    res.status(201).json({ interest });
  } catch (err) {
    next(err);
  } finally {
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
  }
};

exports.deleteInterest = async (req, res, next) => {
  try {
    const user = req.user;
    const { id } = req.params;
    if (user.role !== "admin") {
      throw new AppError("you are not admin", 400);
    }

    const deleteInterest = await Interest.findOne({ where: { id: id } });
    if (!deleteInterest) {
      throw new AppError("cannot delete product", 400);
    }

    await deleteInterest.destroy();
    res.status(200).json({ message: "delete successfully" });
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
    if (user.role !== "admin") {
      throw new AppError("you are not admin");
    }
    const { id } = req.params;
    const oneInterest = await Interest.findOne({ where: { id: id } });
    if (!oneInterest) {
      throw new AppError("not found this id", 400);
    }
    res.status(200).json({ oneInterest: oneInterest });
  } catch (err) {
    next(err);
  }
};

exports.updateInterest = async (req, res, next) => {
  try {
    const user = req.user;
    if (user.role !== "admin") {
      throw new AppError("you are not admin");
    }

    const { text } = req.body;
    const { id } = req.params;

    const file = req.file;

    const findInterest = await Interest.findOne({ where: { id } });

    let icon = findInterest.icon;
    if (file) {
      const newUrl = await cloudinary.upload(
        file.path,
        icon ? cloudinary.getPublicId(icon) : null
      );
      icon = newUrl;
    }

    await Interest.update(
      {
        text,
        icon,
      },
      { where: { id } }
    );
    const allInterest = await Interest.findAll();
    res.status(200).json({ allInterest: allInterest });
  } catch (err) {
    next(err);
  }
};
