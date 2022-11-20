const Todo = require('../models/Todo');

// get todos 
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

// create todo 
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


// edit todo only title 
exports.editTodoController = async (req, res)=>{
    try{

        const {todoId} = req.params;
        const checkToExists = await Todo.findById(todoId);
        if(!checkToExists)
         throw new Error("no such todo exists");
        const todo = await Todo.findById(todoId);

        // editing todo title 
        console.log(todo)
        todo.title = req.body.title;
        // console.log(todo)
        const editTodo = await Todo.findByIdAndUpdate(todoId, todo);
        res.json("success")

    }
    catch(err){
        res.status(401).json({
            success: false,
            message: err.message,
        })
    }
}