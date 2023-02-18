const ProductController = require('../controllers/product.controller')

module.exports = app => {

    app.get('/api/product', ProductController.product)
    app.get('/api/product/:id', ProductController.getOneProduct)
    app.post('/api/createProduct', ProductController.createProduct)
    app.put('/api/updateProduct/:id', ProductController.updateProduct)
    app.delete('/api/deleteProduct/:id', ProductController.deleteProduct)
}