const User = require('../models/User');
const Cart = require('../models/User')
const CartItem = require('../models/cartItem')
const nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'lvarshanidze2001@gmail.com',
        pass: 'qpjb grrc rxwo uybx'
    }
});

const createOrUpdateCartItem = async (uuid, name, color, quantity, price) => {
    try {
        let user = await User.findOne({
            where: { uuid }
        });

        if (!user) {
            user = await User.create({ uuid })
        }

        let existingCartItem = await CartItem.findOne({
            where: { uuid, color }
        });

        if (existingCartItem) {
            // If an item with the same color already exists, update its quantity.
            existingCartItem.quantity += quantity;
            existingCartItem.setUser(user); // Associate the CartItem with the User
            await existingCartItem.save()
            return existingCartItem
        } else {
            const cartItem = await CartItem.create({
                uuid,
                name,
                color,
                quantity,
                price
            });
            cartItem.setUser(user)
            return cartItem;
        }
    } catch (error) {
        console.error('Error creating or updating cart item: ', error);
        throw error;
    }
}


exports.getCart = (req, res, next) => {
    const userId = req.params.userId;
    CartItem.findAll({ where: { uuid: userId } })
        .then(cart => {
            if (cart) {
                res.status(200).json({ message: 'success', cartItems: cart })
            }
        })
        .catch(err => {
            console.log(err);
        })
}

exports.postCart = (req, res, next) => {
    console.log('aq aris');
    const userId = req.params.userId;
    const name = req.body.name;
    const color = req.body.color;
    const quantity = req.body.quantity;
    const price = 34.99;
    console.log(userId, color, quantity);
    createOrUpdateCartItem(userId, name, color, quantity, price)
    res.send({ mess: 'asda' })
}

exports.deleteCart = (req, res, next) => {
    const userId = req.params.userId;
    const color = req.body.color
    User.findOne({ where: { uuid: userId } })
        .then(user => {
            if (user) {
                return CartItem.findAll({ where: { uuid: userId, color: color } })
            }
            res.status(404).json({ message: 'item doesnt exists' })
        })
        .then(cartItem => {
            if (cartItem.length === 0) {
                res.status(404).json({ message: 'not found' })
            }
            const destroyPromises = cartItem.map(item => item.destroy())
            return Promise.all(destroyPromises)
        })
        .then(() => {
            res.status(200).json({ message: 'cart deleted successfully' })
        })
        .catch(err => {
            console.log(err);
        })

}

// contact-us Message
exports.postMessage = (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    var mailOptions = {
        from: 'lvarshanidze2001@gmail.com',
        to: [
            'varshanidze.luka@gmail.com',
        ],
        subject: 'Message',
        text: `nameFrom: ${name}, emailFrom: ${email}, messageFrom: ${message}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.status(200).json({ name: name })
}