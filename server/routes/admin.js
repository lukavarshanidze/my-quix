const express = require('express')
const { body } = require('express-validator');
const User = require('../models/user');
const adminController = require('../controllers/admin')

const router = express.Router();


router.post('/add-product', adminController.postAddProduct)

router.get('/get-products', adminController.getProduct)

router.post('/delete-product', adminController.deleteProduct)




module.exports = router;