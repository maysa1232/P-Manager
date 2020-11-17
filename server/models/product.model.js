const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product title must be included!"],
        minlength: [3, "Product title must be at least 3 characters long!"]
    },
    price:{
        type: Number,
        required: [true, "Product isn't free!"]
    },
    description: {
        type: String,
        required: [true, "Describe product please."]
    }, 
    
}, {timestamps: true});
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product; 