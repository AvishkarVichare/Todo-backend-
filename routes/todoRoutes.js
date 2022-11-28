const express = require('express');
const { getTodosController, createTodoController, editTodoController, deleteTodoController, searchTodoController } = require('../controller/todoControllers');
const userAuth = require('../middleware/userAuth')

const router = express.Router();

router.get('/getTodos',userAuth, getTodosController);
router.post('/createTodo',userAuth, createTodoController);
router.put('/editTodo/:todoId',userAuth, editTodoController);
router.delete('/deleteTodo/:todoId',userAuth, deleteTodoController);
router.get('/searchTodos',userAuth, searchTodoController);

module.exports = router;