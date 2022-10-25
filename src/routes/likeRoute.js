const express = require('express');
const upload = require('../middlewares/upload');

const likeController = require('../controllers/likeController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router
  .route('/')
  .get(upload.none(), authenticate, likeController.getAllLikeByPostId);
router
  .route('/')
  .post(upload.none(), authenticate, likeController.toggleLikeByPostId);
