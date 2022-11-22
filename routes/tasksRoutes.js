const express = require('express');
const { getTasksController, addTaskController, checkUnCheckTaskController, editTaskController, deleteTaskController } = require('../controller/taskController');
const router = express.Router();

router.get('/getTasks/:todoId', getTasksController);
router.put('/addTask/:todoId', addTaskController);
router.put('/checkTask/:todoId/:taskId', checkUnCheckTaskController);
router.put('/editTask/:todoId/:taskId', editTaskController);
router.put('/deleteTask/:todoId/:taskId', deleteTaskController);

module.exports = router;
