const jwt = require('jsonwebtoken');

const userAuth = (req, res, next)=>{
    const token = req.header('token') || req.cookies.token
    // console.log(token)
    try{

        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODM5MjY1NWNlNjcyNWEyYWY5YzI3MyIsImlhdCI6MTY2OTU2NzA3N30.U5qzJW1J5b76sA1fgLWsFPYMcXkyySAk6hZNUb0vOWE";
        if(!token){
            return res.status(401).json({
                message: "No entry without auth"
            })
        }
        
        const users = jwt.verify(token,"shhhhh");

        // console.log(users)

        req.user = {
            user_id:users.id
        }
        
        
    }
    catch(err){
        return res.json({message:"no",err})
    }
    next(); 
}

module.exports = userAuth;