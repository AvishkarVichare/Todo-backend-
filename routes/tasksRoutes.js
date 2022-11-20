const express = require('express');
const { getTasksController } = require('../controller/taskController');
const router = express.Router();

router.get('/getTasks/:todoId', getTasksController);

module.exports = router;
