const express = require('express');
const { getTasksController, addTaskController, checkUnCheckTaskController, editTaskController, deleteTaskController } = require('../controller/taskController');
const router = express.Router();
const userAuth = require('../middleware/userAuth')

router.get('/getTasks/:todoId', userAuth, getTasksController);
router.put('/addTask/:todoId', userAuth, addTaskController);
router.put('/checkTask/:todoId/:taskId', userAuth, checkUnCheckTaskController);
router.put('/editTask/:todoId/:taskId', userAuth, editTaskController);
router.put('/deleteTask/:todoId/:taskId', userAuth, deleteTaskController);

module.exports = router;
