const express = require('express');
const upload = require('../middlewares/upload');

const authController = require('../controllers/authController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

<<<<<<< HEAD
router.route('/register').post(upload.none(), authController.register);
router.post('/login', upload.none(), authController.login);
router.post('/chat', upload.none(), chatController.getChat);
=======
router.route("/register").post(authController.register);
router.post("/login", upload.none(), authController.login);
>>>>>>> dcc9bfe6d9d19ce45a0316280d4fe189f6089479
// router.get('/me', authenticate, authController.getMe);

module.exports = router;
