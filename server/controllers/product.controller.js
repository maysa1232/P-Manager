const Product = require("../models/product.model");

//read all products 
module.exports.getAllProducts = (req, res) => {
    Product.find()
    .then(allProducts => res.json({products: allProducts }))
    .catch(err => res.json({message:" Erro you can't gett All products....", error: err }));
}


//read one product 
module.exports.getProduct = (req, res) => {
    Product.findOne({_id: req.params._id})
    .then(getProduct => res.json({product: getProduct }))
    .catch(err => res.json({message:" Erro you can't gett one product....", error: err }));
}


//Create a product 
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then(newProduct => res.json({product: newProduct }))
    .catch(err => res.status(400).json(err));
}



//update a product
module.exports.updateProduct = (req, res) => {
    Product.update({_id: req.params._id}, {
        $set: {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description

        }
    })
    .then(updProduct => res.json({product: updProduct}))
    .catch(err => res.status(400).json(err));
}


//delete a product 

module.exports.deleteProduct = (req, res) => {
    Product.remove({_id: req.params._id })
    .then(delProduct => res.json({message: "Deleted your stupid product"}))
    .catch(err => res.json({message:" Erro you can't delete product....", error: err }));

}