const express = require('express');
const upload = require('../middlewares/upload');

const chatController = require('../controllers/chatController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.route('/:id').get(upload.none(), chatController.getAllChatByUserId);

// router.get('/me', authenticate, authController.getMe);

module.exports = router;
