const express = require('express')
const router = express.Router()

const{ Login,Signup,geAlltUsers,updateProfile,userByID,userByEmail,deleteUser } = require('./Controller')

router.post('/login',Login)
router.post('/signup',Signup)
router.get('/getalluser', geAlltUsers)
router.get('/getuserbyid', userByID)
router.get('/getuserbyeail', userByEmail)
router.delete('/delete-user', deleteUser)
router.put('/update-profile', updateProfile)

module.exports = router