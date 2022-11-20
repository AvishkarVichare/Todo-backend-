const Todo = require('../models/Todo');

exports.getTodosController = async (req, res)=>{
    try{

        const todos = await Todo.find();
        res.status(200).json({
            success: true,
            message: "successfully retrieved",
            todos
        })        
    }
    catch(err){
        res.status(401).json({
            success: false,
            message: err.message,
        })
    }
}

exports.createTodoController = async (req, res)=>{
    try{

        const {title} = req.body;
        if(!title)
         throw new Error("title can't be empty");

        const todo = new Todo({
            title
        })
        const savedTodo = await todo.save();
        res.status(200).json({
            success: true,
            message: "successfully retrieved",
            todo: savedTodo
        })
        
    }
    catch(err){
        res.status(401).json({
            success: false,
            message: err.message,
        })
    }
}