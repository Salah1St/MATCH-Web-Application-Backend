const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    const token = genToken({ id: user.id });
    res.status(201).json({ token });
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
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

// exports.getMe = (req, res) => {
//   res.status(200).json({ user: req.user });
// };
