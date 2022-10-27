const express = require('express');

const nearmeController = require('../controllers/nearmeController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.put('/updatelocation', authenticate, nearmeController.updateLocation);

module.exports = router;
