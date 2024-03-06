const express = require('express')
const { body } = require('express-validator');
const User = require('../models/user');
const authController = require('../controllers/auth')
const isAuth = require('../middleware/is-auth')

const router = express.Router();

router.put('/signup', [
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email.')
        .custom((value, { req }) => {
            return User.findOne({ where: { email: value } })
                .then(userDoc => {
                    if (userDoc) {
                        return Promise.reject('E-Mail address already exists!')
                    }
                })
        })
        .normalizeEmail(),
    body('password')
        .trim()
        .isLength({ min: 8 }),
    body('name')
        .trim()
        .not()
        .isEmpty()
],
    authController.signup
)

router.post('/login', authController.login)

router.post('/logout', authController.signout )

router.post('/message-us', authController.postMessage)

module.exports = router;