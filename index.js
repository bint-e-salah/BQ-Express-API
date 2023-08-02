const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')

const port = process.env.SERVER_PORT ||5950

app.use(express.json())


 app.use('/api', require('./api/users/Router'))
 app.use('/api', require('./api/product/Router'))
 app.use('/api', require('./api/category/Router'))
 app.use('/api', require('./api/brand/Router'))

// mongoose.connect(process.env.MONGO_URI)
// .then(()=> console.log("DB conn"))
// .catch((err)=> console.log("Something went wrong"))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})