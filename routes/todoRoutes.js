const express = require('express');
const { getTodosController, createTodoController } = require('../controller/todoControllers');
const router = express.Router();

router.get('/getTodos', getTodosController);
router.post('/createTodo', createTodoController);

module.exports = router;