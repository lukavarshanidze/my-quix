const express = require('express')
const router = express.Router()
const cartControllers = require('../controllers/cart')
const data = require('../data/america.json')

router.get('/api/cart/:userId', cartControllers.getCart)

router.post('/api/cart/:userId', cartControllers.postCart)

router.delete('/api/delete/:userId', cartControllers.deleteCart)

router.get('/api/usa-data', (req, res, next) => {
    res.json({data})
})

router.post('/api/contact-us', cartControllers.postMessage)


module.exports = router