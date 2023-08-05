const {Schema, model} =require('mongoose')

const ProductSchema = new Schema({
    name : {
        type : String,
        unique: true,
        required : true
    }
    ,
    price : {
        type : Number,
        required : true
    }
    ,
    brand : {
        type : String,
        required : true

    }
    ,
    category : {
        type : String,
        required :true
    },
     
    thumbnail : {
        type : String,
        required :true
    }
    ,
    
    images : {
        type : Array,
        required : true
    },
    
    description : {
        type : String,
        required : true

    }
    
    
})


const Products = model('product',ProductSchema)
module.exports = Products