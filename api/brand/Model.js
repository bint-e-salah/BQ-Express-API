const { Schema, model } = require('mongoose')

const BrandSchema = new Schema(
    {
        brandName: {
            type: String,
            required: true,
            unique: true
        },
        brandImage: {
            type: String,
            required: true
        },
        brandCtegory: {
            type: String,
            required: true
        }
        
    }
)

const Brands = model('brand', BrandSchema)
module.exports = Brands