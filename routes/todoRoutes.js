const express = require('express');
const { getTodosController, createTodoController, editTodoController } = require('../controller/todoControllers');
const router = express.Router();

router.get('/getTodos', getTodosController);
router.post('/createTodo', createTodoController);
router.put('/editTodo/:todoId', editTodoController);

module.exports = router;