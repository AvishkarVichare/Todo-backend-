const express = require('express');
const { createUserController, loginUserController } = require('../controller/userController');
const router = express.Router();

router.post('/u/createUser',createUserController)
router.post('/u/login',loginUserController)

module.exports = router;