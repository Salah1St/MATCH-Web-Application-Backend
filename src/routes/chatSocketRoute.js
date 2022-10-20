const express = require('express');
const upload = require('../middlewares/upload');

const chatSocketController = require('../controllers/chatSocketController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.get('/', chatSocketController.chat);
router.post('/fetchFriends', authenticate, chatSocketController.fetchFriends);



module.exports = router;
