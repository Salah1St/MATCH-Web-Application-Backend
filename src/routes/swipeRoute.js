const express = require('express');
const upload = require('../middlewares/upload');

const swipeController = require('../controllers/swipeController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.route('/').get(authenticate, swipeController.getAllSwipedMe);
router.route('/myswipe').get(authenticate, swipeController.getAllMySwipe);
router
  .route('/')
  .post(upload.none(), authenticate, swipeController.createSwipe);

// router.get('/me', authenticate, authController.getMe);
router.route('/friendsInfo').get(authenticate, swipeController.fetchFriendsNearMe);

module.exports = router;
