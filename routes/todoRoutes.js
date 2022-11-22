const express = require('express');
const { getTodosController, createTodoController, editTodoController, deleteTodoController } = require('../controller/todoControllers');
const router = express.Router();

router.get('/getTodos', getTodosController);
router.post('/createTodo', createTodoController);
router.put('/editTodo/:todoId', editTodoController);
router.delete('/deleteTodo/:todoId', deleteTodoController);

module.exports = router;