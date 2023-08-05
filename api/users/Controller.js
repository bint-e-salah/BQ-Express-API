const User = require('./Model')
const { connect } = require('mongoose')
require('dotenv').config()
//const { hash, compare } = require('bcryptjs')
//const { sign } = require('jsonwebtoken')


const Login = async(req, res)=>{
    const { email, password } = req.body;

    res.json({
        message: "Working"
    })
}

const Signup = async (req, res)=>{
    const { username, email, password } = req.body;
   if(!username ||!email ||!password){
    res.status(403).json({
        message: "Missing reuired field"
    })
   }
   else{

    try {
       
        await connect(process.env.MONGO_URI)
        // consol.log("DB Connected")
        
        const checkExist = await User.exists({ email: email })
         
        

        if(checkExist){
            res.json({
                message: "This email Already Exists"
            })
        }
        else{
            await User.create({ username, email, password  })
            res.status(201).json({
                message: "You have signup Successfully"
            })
        }

        
    } 
    
    catch (error) {
    
        res.json({
            message: "Error"
        })

    }
   
   }
 
}
const geAlltUsers =  (req, res)=>{
    res.json({
        message: "Working"
    })
}
const updateProfile =  (req, res)=>{
    res.json({
        message: "Working"
    })
}
const userByID =  (req, res)=>{
    res.json({
        message: "Working"
    })
}
const userByEmail =  (req, res)=>{
    res.json({
        message: "Working"
    })
}

const deleteUser =  (req, res)=>{
    res.json({
        message: "Working"
    })
}

module.exports = { Login,Signup,geAlltUsers,updateProfile,userByID,userByEmail,deleteUser }