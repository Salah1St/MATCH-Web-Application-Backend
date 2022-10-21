const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cloudinary = require("../utils/cloudinary");

// const { Op } = require("sequelize");

const AppError = require("../utils/appError");
const { User } = require("../sequelize/models");

const genToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET_KEY || "private_key", {
    expiresIn: process.env.JWT_EXPIRES || "1d",
  });

exports.register = async (req, res, next) => {
  try {
    const {
      username,
      emailOrMobile,
      password,
      confirmPassword,
      firstName,
      lastName,
      birthDate,
      gender,
    } = req.body;
    console.log(req.body);
    if (!username) {
      throw new AppError("username is required", 400);
    }

    if (!gender) {
      throw new AppError("gender is required", 400);
    }

    if (!emailOrMobile) {
      throw new AppError("email address or mobile is required", 400);
    }

    if (!password) {
      throw new AppError("password is required", 400);
    }

    if (password !== confirmPassword) {
      throw new AppError("password and confirm password did not match", 400);
    }

    if (!firstName) {
      throw new AppError("firstName is required", 400);
    }

    if (!lastName) {
      throw new AppError("lastName is required", 400);
    }

    if (!birthDate) {
      throw new AppError("birthdate is required", 400);
    }

    const isEmail = validator.isEmail(emailOrMobile + "");
    const isMobile = validator.isMobilePhone(emailOrMobile + "");

    if (!isEmail && !isMobile) {
      throw new AppError("email address or mobile is invalid format", 400);
    }

    // const isDate = validator.isDate(birthDate + "");
    // if (!isDate) {
    //   throw new AppError("birthdate id invalid format");
    // }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      username,
      email: isEmail ? emailOrMobile : null,
      phoneNumber: isMobile ? emailOrMobile : null,
      password: hashedPassword,
      firstName,
      lastName,
      birthDate,
      gender,
    });

    const userInfo = await User.findOne({
      where: user.id,
      attributes: { exclude: "password" },
    });
    console.log(userInfo);

    const token = genToken({ id: user.id });
    res.status(201).json({ token, userInfo });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (typeof username !== "string" || typeof password !== "string") {
      throw new AppError("username or password is invalid", 400);
    }

    const user = await User.findOne({ where: { username: username } });
    if (!user) {
      throw new AppError("not found user", 400);
    }

    const isCorrect = await bcrypt.compare(password, user.password);
    if (!isCorrect) {
      throw new AppError("password is invalid", 400);
    }

    const token = genToken({ id: user.id });
    res.status(200).json({ token, user });
  } catch (err) {
    next(err);
  }
};

exports.getMe = async (req, res) => {
  try {
    const user = req.user;
    const oneUser = await User.findOne({
      where: { id: user.id },
      attributes: { exclude: "password" },
      // include: { model: ShopPath }
    });
    res.status(200).json({ oneUser });
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = req.user;
    const { firstName, lastName, email, gender, occupation } = req.body;
    const file = req.file;
    console.log(firstName, lastName, email, gender, occupation, file);
    const findUser = await User.findOne({ where: { id: user.id } });

    let profileImage = findUser.profileImage;
    if (file) {
      const newUrl = await cloudinary.upload(
        file.path,
        profileImage ? cloudinary.getPublicId(profileImage) : null
      );
      profileImage = newUrl;
    }

    await User.update(
      {
        firstName,
        lastName,
        email,
        gender,
        occupation,
        profileImage,
      },
      { where: { id: user.id } }
    );
    const showUser = await User.findOne({ where: { id: user.id } });
    res.status(200).json({ showUser });
  } catch (err) {
    next(err);
  }
};
