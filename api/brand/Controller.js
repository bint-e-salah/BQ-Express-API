const Brands = require('./Model')
const { connect } = require('mongoose')
require('dotenv').config()

const getAllBrands = async (req, res) => {
    try {
        await connect(process.env.MONGO_URI)
        const allBrand = await Brands.find()
        res.json({
            brands: allBrand
        })

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}


const getBrandByName = async (req, res) => {

    const { Name } = req.query
    try {
        await connect(process.env.MONGO_URI)
        const brand = await Brands.findOne({ Name })
        res.json({ brand })

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

const createBrand = async (req, res) => {
    const { Name, Image } = req.body
    try {
        await connect(process.env.MONGO_URI)
        Brands.create({ Name, Image })
        res.status(201).json({ message: "Success" })

    }

    catch (error) {
        res.json({
            message: error.message
        })
    }
}

const deleteBrand = async (req, res) => {
    const { Name } = req.body
    try {
        await connect(process.env.MONGO_URI)
        await Brands.deleteOne({ Name })
        res.json({ message: "Success" })

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

const updateBrand = async (req, res) => {

    const { _id, Name, Image } = req.body

    const filter = { _id };
    const update = { Name, Image };

    try {
        await connect(process.env.MONGO_URI)
        await Brands.findOneAndUpdate(filter, update, {
            new: true
        })

        const brands = await Brands.find()

        res.json({
            message: "Success",
            brands
        })

    }

    catch (error) {
        res.json({
            message: error.message,
        })
    }
}


module.exports = { getAllBrands, getBrandByName, createBrand, deleteBrand, updateBrand }