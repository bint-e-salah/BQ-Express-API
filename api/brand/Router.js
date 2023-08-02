const express = require('express')
const router = express.Router()

const{ createBrand,updateBrand,getAllBrands,getBrandByName,deleteBrand } = require('./Controller')

router.post('/create-brand',createBrand)
router.get('/brand-by-name', getBrandByName)
router.get('/get-all-brands', getAllBrands)
router.delete('/delete-brand', deleteBrand)
router.put('/update-brand', updateBrand)

module.exports = router