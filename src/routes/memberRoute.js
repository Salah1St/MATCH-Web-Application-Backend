const express = require("express");
const authenticate = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");
const memberController = require("../controllers/memberController");
const { single } = require("../middlewares/upload");

const router = express.Router();

router.post(
  "/createInterestLog",
  authenticate,
  memberController.createInterestLog
);

router.delete(
  "/updateInterestLog",
  authenticate,
  memberController.updateInterestLog
);

module.exports = router;
