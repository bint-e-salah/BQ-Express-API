const Products = require('./Model')
const { connect } = require('mongoose')


const createProduct = async (req, res)=>{
    const{name, price, brand, category, thumbnail, images, description} = req.body

    if(!name||!price||!brand ||!category ||!thumbnail ||!images ||!description){
        res.status(403).json({
            message: "Missing required fieled"
        })
    }
    else{

try {

    await connect(process.env.MONGO_URI)
            const checkExistingProd = await Products.exists({ name })

            if (checkExistingProd) {
                res.status(400).json({
                    message: "Product Already Exists"
                })
            }
            else{

                await Products.create({name, price, brand, category, thumbnail, images, description})
                const allProducts = await Products.find()
                res.json({
                    message: "Product Created",
                    products: allProducts
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

const getAllProducts = async (req, res) => {

    try {
        await connect(process.env.MONGO_URI)
        const allProducts = await Products.find()
        res.json({
            products: allProducts
        })

    }

    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}
const getProductByCategory =  async (req, res) => {

    const { category } = req.query

    try {
        await connect(process.env.MONGO_URI)
        const product = await Products.find({ category })
        res.json({ product })
    }

    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}
const getProductByBrnd =  async (req, res) => {

    const { brand } = req.query

    try {
        await connect(process.env.MONGO_URI)
        const product = await Products.find({ brand})
        res.json({ product })
    }

    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}

const updateProduct = async (req, res) => {
    const { _id, name, price, category, brand ,thumbnail,images, description } = req.body

    const filter = { _id };
    const update = { name, price, category, brand ,thumbnail,images, description };

    try {
        await connect(process.env.MONGO_URI)

        await Products.findOneAndUpdate(filter, update, {
            new: true
        });

        const product = await Products.find()

        res.json({
            message: "Updated Successfully",
            product
        })

    }

    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}

const deleteProduct =  async (req, res) => {

    const { _id } = req.body


    try {
        await connect(process.env.MONGO_URI)
        await Products.deleteOne({ _id })
        const product = await Products.find()
        res.status(200).json({
            message: "Deleted Successfully",
            product
        })
    }

    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}



module.exports = {createProduct,getAllProducts,getProductByBrnd,getProductByCategory,deleteProduct,updateProduct}