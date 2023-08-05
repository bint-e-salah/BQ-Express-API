const express = require('express')
const router = express.Router()

const{ createProduct,getProductByBrnd,getProductByCategory,deleteProduct,updateProduct, getAllProducts } = require('./Controller')

router.post('/create-product', createProduct)
router.get('/get-all-products', getAllProducts)
router.get('/get-product-by-category', getProductByCategory)
router.get('/get-product-by-brand', getProductByBrnd)
router.delete('/delete-product', deleteProduct)
router.put('/update-product', updateProduct)

module.exports = router