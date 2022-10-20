<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');
const { User } = require('../sequelize/models');

=======

const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const { User } = require("../sequelize/models");
>>>>>>> 319b4a2ebfbfcb0f1f3355a823893b9b2cfb5b27
module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith('Bearer')) {
      throw new AppError('unauthenticated', 401);
    }

    const token = authorization.split(' ')[1];
    if (!token) {
      throw new AppError('unauthenticated', 401);
    }

    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY || 'private_key'
    );

    const user = await User.findOne({
      where: { id: payload.id },
      attributes: { exclude: 'password' },
    });

    if (!user) {
      throw new AppError('unauthenticated', 401);
    }

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};
