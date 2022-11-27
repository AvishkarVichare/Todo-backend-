const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    title:String,
    color:String,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
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
        taskcreatedat:{
            type: Date,
            default: Date.now
        },
        taskupdatedAt:{
            type:Date,
            default:Date.now
            
        }
    }]
},
{
    timestamps:true
}
)

module.exports = mongoose.model('todo', ToDoSchema);
