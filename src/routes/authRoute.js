const express = require('express');
const upload = require('../middlewares/upload');

const authController = require('../controllers/authController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.route('/register').post(upload.none(), authController.register);
router.post('/login', upload.none(), authController.login);
router.post('/me', authenticate, authController.getMe);


module.exports = router;
