const { Location, User } = require('../sequelize/models');
const AppError = require('../utils/appError');
const { Op } = require('sequelize');

exports.updateLocation = async (req, res, next) => {
  try {
    const user = req.user;

    const { latitude, longitude } = req.body;
    if (!latitude) {
      throw new AppError('Latitude is required', 400);
    }
    if (!longitude) {
      throw new AppError('Longitude is required', 400);
    }

    const userLocationId = await Location.findOne({
      where: { userId: user.id }
    });
    if (userLocationId) {
      await Location.update(
        {
          latitude,
          longitude
        },
        { where: { userId: user.id } }
      );
    } else {
      await Location.create({
        latitude,
        longitude,
        userId: user.id
      });
    }

    res.status(200).json({ message: 'Update location success' });
  } catch (err) {
    next(err);
  }
};

exports.friendLocation = async (req, res, next) => {
  try {
    const user = req.user;
    const myLocation = await Location.findOne({ where: { userId: user.id } });
    // console.log('latitude', myLocation.latitude);
    // console.log('longitude', myLocation.longitude);
    const MyLatitude = Math.trunc(myLocation.latitude * 10) / 10;
    // console.log('MyLatitude', MyLatitude);
    const MyLongitude = Math.trunc(myLocation.longitude * 10) / 10;
    // console.log('MyLongitude', MyLongitude);
    console.log('user.id', user.id);
    const friendLocation = await Location.findAll({
      where: {
        id: {
          [Op.ne]: user.id
        },
        latitude: { [Op.like]: `${MyLatitude}%` },
        longitude: { [Op.like]: `${MyLongitude}%` }
      },
      include: { model: User, attributes: { exclude: 'password' } }
    });

    res.status(200).json(friendLocation);
  } catch (err) {
    next(err);
  }
};
