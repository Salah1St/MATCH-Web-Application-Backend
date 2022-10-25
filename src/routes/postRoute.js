const express = require('express');
const upload = require('../middlewares/upload');

const postController = require('../controllers/postController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.route('/').get(authenticate, postController.getAllMyPosts);
router.route('/mymatch').get(authenticate, postController.getAllMyMatchPosts);
router.route('/all').get(authenticate, postController.getAllPosts);
router.route('/:postId').delete(authenticate, postController.deletePostById);
router
  .route('/')
  .post(
    upload.fields([{ name: 'image', maxCount: 5 }]),
    authenticate,
    postController.createPost
  );
router
  .route('/')
  .patch(
    upload.fields([{ name: 'image', maxCount: 5 }]),
    authenticate,
    postController.editPostById
  );

module.exports = router;
