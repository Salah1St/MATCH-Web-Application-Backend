const express = require('express');

const nearmeController = require('../controllers/nearmeController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.delete('/updatelocation', authenticate, nearmeController.updateLocation);

module.exports = router;
