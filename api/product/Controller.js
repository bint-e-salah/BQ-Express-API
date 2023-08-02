const User = require('./Model')
const { connect } = require('mongoose')


const createProduct =  (req, res)=>{
    res.json({
        message: "Working"
    })
}
const getProductByCategory =  (req, res)=>{
    res.json({
        message: "Working"
    })
}
const getProductByBrnd =  (req, res)=>{
    res.json({
        message: "Working"
    })
}
const updateProduct =  (req, res)=>{
    res.json({
        message: "Working"
    })
}

const deleteProduct =  (req, res)=>{
    res.json({
        message: "Working"
    })
}

module.exports = {createProduct,getProductByBrnd,getProductByCategory,deleteProduct,updateProduct}