const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    title:String,
    tasks:[{
        main: String
    }]
})

module.exports = mongoose.model('todo', ToDoSchema);
