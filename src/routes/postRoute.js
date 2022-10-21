const express = require('express');
const upload = require('../middlewares/upload');

const postController = require('../controllers/postController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.route('/').get(authenticate, postController.getAllMyPosts);

// router.get('/me', authenticate, authController.getMe);

module.exports = router;
