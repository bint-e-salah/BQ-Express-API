const express = require('express')
const router = express.Router()

const{getAllCategories, CreateCategory,updateCategory,getCategoryByName,getCategoryByID,deleteCategory } = require('./Controller')

router.post('/create-category', CreateCategory)
router.get('/get-all-categories', getAllCategories)
router.get('/get-category-by-name', getCategoryByName)
router.delete('/delete-category', deleteCategory)
router.put('/update-category', updateCategory)

module.exports = router