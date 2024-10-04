const jwt = require('jsonwebtoken');
require('dotenv').config()

const user_auth = async (req,res,next) =>{

    const jwt_token = req.headers.authorization;
    // console.log("**********************");
    // console.log(jwt_token);
    // console.log("**********************");

    const validuser = jwt.verify( jwt_token , process.env.JWT_SECRET);
    // console.log(validuser);
    if(!validuser){
        return res.status(403).json({
            msg : 'you dont have acess to this'
        })
    }

    req.email  = validuser.email;

    next();
}

module.exports = { user_auth }