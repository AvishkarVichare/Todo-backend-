const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    title:String,
    color:String,
    date:{
        type: Date,
        default: Date.now
    },
    tasks:[{
        main: String,
        checked:{
            type:Boolean,
            default:false,
        },
        createdat:{
            type: Date,
            default: Date.now
        }
    }]
})

module.exports = mongoose.model('todo', ToDoSchema);
