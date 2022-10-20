const cloudinary = require("../utils/cloudinary");
const { InterestLog, User } = require("../sequelize/models");
const AppError = require("../utils/appError");

exports.createInterestLog = async (req, res, next) => {
  try {
    const user = req.user;
    const { interestIds } = req.body;
    const userId = await User.findOne({ where: { id: user.id } });
    // console.log(userId); แค่ถามว่ามี user คนนี้มั้ย
    if (!userId) {
      throw new AppError("not foune user", 400);
    }

    if (!interestIds) {
      throw new AppError("not have interestIds");
    }

    const interestIdsParsed = JSON.parse(interestIds);
    // console.log(typeof JSON.parse(interestIds));
    // console.log(JSON.parse(interestIds));

    let data = {};
    if (userId) {
      data.userId = user.id;
    }

    interestIdsParsed.forEach((item) => {
      //   console.log(item);
      data.interestId = Number(item);
      return InterestLog.create(data);
    });

    res.status(201).json({ message: "choose interest succesful" });
  } catch (err) {
    next(err);
  }
};

exports.updateInterestLog = async (req, res, next) => {
  try {
    const user = req.user;
    const { interestIds } = req.body;
    const userId = await User.findOne({ where: { id: user.id } });
    if (!userId) {
      throw new AppError("not foune user", 400);
    }
    if (!interestIds) {
      throw new AppError("not have interestIds");
    }

    await InterestLog.destroy({ where: { userId: user.id } });

    const interestIdsParsed = JSON.parse(interestIds);
    let data = {};
    if (userId) {
      data.userId = user.id;
    }

    interestIdsParsed.forEach((item) => {
      data.interestId = Number(item);
      return InterestLog.create(data);
    });

    res.status(201).json({ message: "update successful" });
  } catch (err) {
    next(err);
  }
};

// exports.addImage = async (req, res, next) => {
//   try {
//     const user = req.user;
//     if (!req.file) {
//       throw new AppError("image is required");
//     }

//     const data = {};
//     if (req.file) {
//       data.url = await cloudinary.upload(req.file.path);
//     }

//     const userImage = await userImage.create(data);
//     res.status(201).json({ userImage });
//   } catch (err) {
//     next(err);
//   }
// };
