const express = require("express");
const authenticate = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");
const memberController = require("../controllers/memberController");

const router = express.Router();

router.post(
  "/createInterestLog",
  authenticate,
  memberController.createInterestLog
);

router.delete(
  "/deleteInterestLog",
  authenticate,
  memberController.deleteInterestLog
);
module.exports = router;
