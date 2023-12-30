const fs = require('fs')
const path = require('path')

const Product = require('../models/product')

exports.postAddProduct = (req, res) => {
    const title = req.body.title
    const shortDesc = req.body.shortDesc
    const description = req.body.description
    const image = req.file
    const category = req.body.category
    const price = req.body.price

    if (!image) {
        return res.status(500).json({ message: 'No image got in body.' })
    }
    const imageUrl = image.path;
    const product = {
        title,
        shortDesc,
        description,
        category,
        image: imageUrl,
        price
    }
    Product.create(product)
        .then(result => {
            res.status(200).json({ message: 'correct' });
        })
        .catch(err => {
            res.status(500).json({ error: 'Internal server error' });
        })

}
exports.getProduct = (req, res) => {
    Product.findAll()
        .then(products => {
            const filteredProducts = products.map((product) => ({
                title: product.title,
                shortDesc: product.shortDesc,
                description: product.description,
                category: product.category,
                // image: `${}`,
                price: product.price
            }))
            res.status(200).json(products)
        })
        .catch(err => {
            console.log(err);
        })
}

exports.deleteProduct = (req, res) => {
    const id = req.body.id;
    Product.findByPk(id)
        .then(product => {
            const path = product.image.split('/')[1]
            deleteImage(product.image)
            return product.destroy()
        })
        .then(result => {
            res.status(200).json({ message: 'item deleted successfully!' })
        })
        .catch(err => {
            console.log(err);
        })

}

const deleteImage = filePath => {
    filePath = path.join(__dirname, '..', filePath);
    fs.unlink(filePath, err => console.log(err))
}