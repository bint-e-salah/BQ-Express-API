const Category = require('./Model')
const User = require('./Model')
const { connect } = require('mongoose')
require('dotenv').config()


const getAllCategories = async (req, res)=>{
   
    try {
        await connect(process.env.MONGO_URI)
        const allCategories = await Category.find()
        res.json({
      
             category: allCategories
   })




   } 
   
   
   catch (error) {
    
res.status(400).json({
    message: error.message
})

   }

}

 const getCategoryByName = async (req, res) => {

    const { CategoryName } = req.query
    try {
        await connect(process.env.MONGO_URI)
        const categoryByName = await Category.findOne({ CategoryName })
        res.json({ categoryByName })

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

const CreateCategory = async (req, res)=>{
  const{CategoryName , CategoryImage} = req.body
  
  if(!CategoryName || !CategoryImage){
    res.status(403).json({
        message: "Missing Required Field"
    })
  }
  
  else{
    try {
         await connect(process.env.MONGO_URI)
const checkExistingCat = await Category.exists({CategoryName })
 if(checkExistingCat){
    res.status(400).json({
        message: "Category Alredy Exists"
    })
 }

 else{
    await Category.create({CategoryName , CategoryImage})
    const allCategories = await Category.find()

    res.json({
       message: "DB Connected",
       category: allCategories
    })

 }


    } 
    
    
    catch (error) {
     
 res.status(400).json({
     message: error.message
 })
 
    }
  }

    

}

const updateCategory =  async (req, res)=>{
    const { _id, CategoryName, CategoryImage } = req.body;

    const filter = { _id };
    const update = { CategoryName, CategoryImage };
   
    try {
     
        await connect(process.env.MONGO_URI)
        await Category.findOneAndUpdate(filter, update, {
            new: true
        })

        const categories = await Category.find()

        res.json({
            message: "Success"
        })


    } 
    
    
    catch (error) {
     
 res.status(400).json({
     message: error.message
 })
 
    }
 
 }

const deleteCategory =   async (req, res) => {
    const { CategoryName } = req.body
    try {
        await connect(process.env.MONGO_URI)
        await Category.deleteOne({ CategoryName })
        res.json({ message: "Success" })

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

module.exports = {getAllCategories, CreateCategory,updateCategory,getCategoryByName,deleteCategory  }