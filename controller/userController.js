const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

// sign up 
exports.createUserController = async (req, res) => {
    try {

        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user)
            throw new Error("Email already exists");

        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            email,
            password: encryptedPassword,

        })

        const data = {
            id: newUser._id
        }

        const token = await jwt.sign(data, 'shhhhh');

        const cratedUser = newUser;
        cratedUser.password=undefined


      res.status(200).cookie('token', token, {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: false
        }).json({
            success: "true",
            token,
            cratedUser
        });
    }
    catch (err) {
        res.status(401).json({
            success: false,
            message: err.message,
        })
    }
}


// login user 
exports.loginUserController = async (req, res) => {
    try {
        
        const { email, password } = req.body;
        const isEmailExists = await User.findOne({ email });
        if (!isEmailExists)
            throw new Error("no such email found please sign up");

        const user = await User.findOne({ email });
        // console.log(user)
        const comparePassword = await bcrypt.compare(password, user.password);

        if (!comparePassword)
            throw new Error("wrong password");


        const data = {
            id: user._id
        }

        const token = await jwt.sign(data, 'shhhhh');

        user.password = undefined;
        res.status(201).cookie('token', token, {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: false
        }).json({
            success: true,
            token,
            user

        })

    }
    catch (err) {
        res.status(401).json({
            success: false,
            message: err.message,
        })
    }
}


// get user 
exports.getUserController = async(req,res)=>{
    try{
        const user = await User.findById(req.user.user_id);
        if(!user)
        throw new Error("no such user exists");
        user.password = undefined;
        res.status(201).json({
            success:true,
            user
        })

    }
    catch (err) {
        res.status(401).json({
            success: false,
            message: err.message,
        })
    }
}