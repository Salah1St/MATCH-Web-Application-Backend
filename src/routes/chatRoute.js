const express = require('express');
const upload = require('../middlewares/upload');

const chatController = require('../controllers/chatController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router
  .route('/')
  .get(upload.none(), authenticate, chatController.getAllChatByUserId);

// router.get('/me', authenticate, authController.getMe);

module.exports = router;
