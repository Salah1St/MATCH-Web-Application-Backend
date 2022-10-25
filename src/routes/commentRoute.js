const express = require('express');
const upload = require('../middlewares/upload');

const commentController = require('../controllers/commentController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router
  .route('/')
  .post(upload.none(), authenticate, commentController.createComment);
router
  .route('/')
  .get(upload.none(), authenticate, commentController.getAllCommentByPostId);
router
  .route('/')
  .delete(upload.none(), authenticate, commentController.deleteCommentById);

module.exports = router;
