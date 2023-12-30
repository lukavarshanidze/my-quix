require('dotenv').config()

const bcrypt = require('bcryptjs')
const { validationResult } = require("express-validator")
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const User = require('../models/user')
const nodemailer = require('nodemailer');

const { isEqual } = require('lodash');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'lvarshanidze2001@gmail.com',
        pass: 'qpjb grrc rxwo uybx'
    }
});

const secret = crypto.randomBytes(32).toString('hex')

exports.signup = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.')
        error.statusCode = 422;
        error.data = errors.array()
        throw error
    }
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    bcrypt.hash(password, 12)
        .then(hashedPass => {
            return User.create({
                email: email,
                password: hashedPass,
                name: name
            })
        })
        .then(result => {
            var mailOptions = {
                from: 'lvarshanidze2001@gmail.com',
                to: email,
                subject: 'Accountt created at quixfye!',
                text: "If it wasn't you please message us!"
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            res.status(201).json({ message: 'User created!', userId: result.id }) // 201 => resource was created successfully!
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500; // 500 => server side error
            }
            next(err)
        })
}

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;
    User.findOne({ where: { email: email } })
        .then(user => {
            if (!user) {
                const error = new Error('A user with this email could not be found.')
                error.statusCode = 401;
                throw error;
            }
            loadedUser = user;
            return bcrypt.compare(password, user.password)
        })
        .then(isEqual => {
            if (!isEqual) {
                const error = new Error('Wrong password!')
                error.statusCode = 401;
                throw error;
            }
            const token = jwt.sign(
                {
                    email: loadedUser.email,
                    userId: loadedUser.id
                },
                process.env.SECRET_KEY,
                { expiresIn: '10m' }
            );
            res.status(200).json({ token: token, userId: loadedUser.id, username: loadedUser.name })
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err)
        })
}

exports.signout = (req, res, next) => {
    res.json({ success: true, message: 'Logout successful' });
}