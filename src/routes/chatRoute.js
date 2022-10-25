const express = require('express');
const upload = require('../middlewares/upload');

const chatController = require('../controllers/chatController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router
  .route('/')
  .get(upload.none(), authenticate, chatController.getAllChatByUserId);

// router.get('/me', authenticate, authController.getMe);
router.get('/getFriendsRoom', authenticate, chatController.getFriendsRoom);
router.post('/createRoom', authenticate, chatController.createRoom);
router.post('/addMessage', authenticate, chatController.addMessage);



module.exports = router;
