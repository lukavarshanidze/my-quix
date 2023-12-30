require("dotenv").config()

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization')
    console.log(authHeader);
    if (!authHeader) {
        const error = new Error('Nwot authenticated.');
        error.statusCode = 401;
        throw error;
    }
    console.log('aq agar modis?');
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, process.env.SECRET_KEY)
    } catch (error) {
        error.statusCode = 500;
        throw error;
    }

    if (!decodedToken) {
        const error = new Error('nnot authenticated.')
        error.statusCode = 401;
        throw error;
    }
    req.userId = decodedToken.userId;
    next();
}