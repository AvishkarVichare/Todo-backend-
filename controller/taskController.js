const Todo = require('../models/Todo');

exports.getTasksController = async (req, res)=>{

    try{
        const {todoId} = req.params;
        const checkToExists = await Todo.findById(todoId);
        if(!checkToExists)
            throw new Error("no such todo exists");
        
        const todo = await Todo.findById(todoId);
        const tasks = todo.tasks;
        res.status(200).json({
            success: true,
            message: "tasks successfully retrieved",
            tasks
        })
    }
    catch(err){
        res.status(401).json({
            success: false,
            message: err.message,
        })
    }

}

// create tasks 
exports.createTaskController = async (req, res)=>{
    try{

        const {todoId} = req.params;
        const checkToExists = await Todo.findById(todoId);
        if(!checkToExists)
            throw new Error("no such todo exists");
        
        const todo = await Todo.findById(todoId);
        // inserting task 
        const tasks = todo.tasks.push(req.body.main);
        
    }
    catch(err){
        res.status(401).json({
            success: false,
            message: err.message,
        })
    }
}