require('dotenv').config()
const jwt = require('jsonwebtoken');

const client_id = process.env.CLIENT_ID;

const token = jwt.sign({ client_id }, 'secret-code', { expiresIn: '1h' })

function verifyToken(req, res, next) {
    const token = req.headers.authorization;

    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token is invalid ' });
        }

        req.client_id = decoded.client_id;
        next()
    })
}