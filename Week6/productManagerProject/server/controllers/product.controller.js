const Product = require("../models/product.model")

module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body) 
            .then(res => {
                console.log(res);
                res.json(res)
            })
            .catch( err => {
                res.json(err)
            })
    },
    
    product: (req, res) => {
        Product.find({})
            .then((allProduct) => {
                res.json(allProduct)
            })
            .catch( err => {
                res.json(err)
            })
    },
    
    getOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then(product => {
                res.json(product)
            })
            .catch( err => {
                res.json(err)
            })
    },
    
    updateProduct: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, { new: true, runValidators: true } )
            .then( newProduct => {
                res.json(newProduct)
            })
            .catch( err => {
                res.json(err)
            })
    },
    
    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then( result => {
                res.json(result)
            })
            .catch( err => {
                res.json(err)
            })
    },
}