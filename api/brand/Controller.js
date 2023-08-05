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

    const { brandName } = req.query
    try {
        await connect(process.env.MONGO_URI)
        const brand = await Brands.findOne({ brandName })
        res.json({ brand })

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

const createBrand = async (req, res) => {
    const { brandName, brandImage, brandCategory } = req.body
    try {
        await connect(process.env.MONGO_URI)
        Brands.create({  brandName, brandImage, brandCategory })
        res.status(201).json({ message: "Success" })

    }

    catch (error) {
        res.json({
            message: error.message
        })
    }
}

const deleteBrand = async (req, res) => {
    const { brandName } = req.body
    try {
        await connect(process.env.MONGO_URI)
        await Brands.deleteOne({ brandName })
        res.json({ message: "Success" })

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

const updateBrand = async (req, res) => {

    const { _id, brandName, brandImage, brandCategory } = req.body

    const filter = { _id };
    const update = { brandName, brandImage, brandCategory };

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