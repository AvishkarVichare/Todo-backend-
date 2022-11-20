const express = require('express');
const { getTasksController, addTaskController } = require('../controller/taskController');
const router = express.Router();

router.get('/getTasks/:todoId', getTasksController);
router.put('/addTask/:todoId', addTaskController);

module.exports = router;
