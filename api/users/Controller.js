const User = require('./Model')
const { connect } = require('mongoose')
require('dotenv').config()
//const { hash, compare } = require('bcryptjs')
//const { sign } = require('jsonwebtoken')


const Login = (req, res)=>{


    res.json({
        message: "Working"
    })
}

const Signup = async (req, res)=>{
    const { username, email, password } = req.body;

    try {
       
         connect(process.env.MONGO_URI)
         //consol.log("DB Connected")
        
         await User.create({username, email, password})
         console.log("Success")

        res.json({
            message: "Signed Up Done" 
        })
    } 
    
    catch (error) {
    
        res.json({
            message: "Error"
        })

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