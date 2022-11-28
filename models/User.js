const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:[true, "name is compulsory"]
        },
        email:{
            type: String,
            require: [true, "email is compulsory"]
        },
        password: {
            type: String,
            minLength: [8, "password cannot be less than 8 characters"],
            require: [true, "password is required"]
        }
    }
)

module.exports = new mongoose.model("user", UserSchema);