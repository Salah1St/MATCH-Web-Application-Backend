const express = require('express');
const upload = require('../middlewares/upload');

const userImageController = require('../controllers/userImageController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router
  .route('/')
  .post(
    upload.fields([{ name: 'image', maxCount: 5 }]),
    authenticate,
    userImageController.createImage
  );
router
  .route('/')
  .get(upload.none(), authenticate, userImageController.getUserImageByUserId);
router
  .route('/')
  .delete(
    upload.none(),
    authenticate,
    userImageController.deleteUserImagebyuserImageId
  );

module.exports = router;
