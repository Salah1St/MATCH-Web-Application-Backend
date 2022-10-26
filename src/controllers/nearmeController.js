const { Location } = require('../sequelize/models');
const AppError = require('../utils/appError');

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
      await Location.destroy({ where: { userId: user.id } });

      return await Location.create({
        latitude,
        longitude,
        userId: user.id
      });
    }

    await Location.create({
      latitude,
      longitude,
      userId: user.id
    });

    res.status(200).json({ message: 'Update location success' });
  } catch (err) {
    next(err);
  }
};
