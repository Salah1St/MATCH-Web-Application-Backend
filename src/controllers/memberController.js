const { InterestLog, User } = require("../sequelize/models");
const AppError = require("../utils/appError");

exports.createInterestLog = async (req, res, next) => {
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

exports.deleteInterestLog = async (req, res, next) => {
  try {
    const user = req.user;
    const { interestLogIds } = req.body;
    const userId = await User.findOne({ where: { id: user.id } });
    if (!userId) {
      throw new AppError("not foune user", 400);
    }

    if (!interestLogIds) {
      throw new AppError("not have interestIds");
    }

    const interestLogIdsParsed = JSON.parse(interestLogIds);

    interestLogIdsParsed.forEach((item) => {
      //   console.log(item);
      let number = Number(item);
      const handleDelete = async () => {
        const deleteItem = await InterestLog.findOne({ where: { id: number } });
        return deleteItem.destroy();
      };
      handleDelete();
    });

    res.status(201).json({ message: "delete succesful" });
  } catch (err) {
    next(err);
  }
};
