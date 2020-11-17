const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/products", ProductController.getAllProducts);
    app.get("/api/products/:_id", ProductController.getProduct);
    app.post("/api/products/create", ProductController.createProduct);
    app.put("/api/products/update/:_id", ProductController.updateProduct);
    app.delete("/api/products/delete/:_id", ProductController.deleteProduct);
}