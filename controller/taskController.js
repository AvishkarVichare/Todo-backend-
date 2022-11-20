const Todo = require('../models/Todo');

// get all task from specific todo  
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
exports.addTaskController = async (req, res)=>{
    try{

        const {todoId} = req.params;
        const checkToExists = await Todo.findById(todoId);
        if(!checkToExists)
            throw new Error("no such todo exists");
        
        const todo = await Todo.findById(todoId);

        // inserting task 
        todo.tasks.push({main: req.body.main});
        const savedTask = await Todo.findByIdAndUpdate(todoId, todo);
        res.status(200).json({
            success: true,
            message: "tasks successfully added",
            savedTask
        })
    }
    catch(err){
        res.status(401).json({
            success: false,
            message: err.message,
        })
    }
}

