const Todo = require('../models/Todo');

// get todos 
exports.getTodosController = async (req, res)=>{
    try{
        // const user = req.user;
        const todos = await Todo.find({user:req.user.user_id});
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
        const user = req.user;
        // console.log(user)
        if(!user)
         throw new Error("user not found and you are not allowed");
            

        const {title, color} = req.body;
        if(!title)
         throw new Error("title can't be empty");

        const todo = new Todo({
            title,
            color,
            user:user.user_id
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
        const {title, color} = req.body;
        const checkToExists = await Todo.findById(todoId);
        if(!checkToExists)
         throw new Error("no such todo exists");
        const todo = await Todo.findById(todoId);
    
        // editing todo title 
        // console.log(todo)
        todo.title = title;
        todo.color = color;
        // console.log(todo)
        const editTodo = await Todo.findByIdAndUpdate(todoId, todo);
        res.status(200).json({
            success: true,
            message: "successfully edited todo",
            editedTodo: todo
        })

    }
    catch(err){
        res.status(401).json({
            success: false,
            message: err.message,
        })
    }
}


exports.deleteTodoController = async (req, res)=>{
    try{
        
        const {todoId} = req.params;
        const checkToExists = await Todo.findById(todoId);
        if(!checkToExists)
         throw new Error("no such todo exists");

        const deletedTodo = await Todo.findByIdAndDelete(todoId);
        res.status(200).json({
            success: true,
            message: "successfully deleted todo",
            deletedTodo: deletedTodo
        })
        
    }
    catch(err){
        res.status(401).json({
            success: false,
            message: err.message,
        })
    }
}


// search 
// what learned you have use "" to wrap as we did with "tasks.main" for getting that field in array object
exports.searchTodoController = async(req, res)=>{
    try{

        let {search} = req.query;
       

        const todos = await Todo.find(
            { 
                $or:[
                    {
                        $and:[
                            {title:  new RegExp(search, "i") },
                            {user:req.user.user_id}
                        ]
                    },
                    {
                        $and:[
                            {'tasks.main' : new RegExp(search, "i")},
                            {user:req.user.user_id}
                        ]
                        
                    }
                ]
            } 
        );
            res.json({
                success:true,
                message:"retrived query",
                todos
            })

    }
    catch(err){
        // console.log(err)
        res.status(401).json({
            success: false,
            message: err.message,
        })
    }
}
