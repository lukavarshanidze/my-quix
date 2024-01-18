const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const cartRoutes = require('./routes/cart')
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin')
const paymentRoutes = require('./routes/payment')

const sequelize = require('./utils/database')
const CartItem = require('./models/cartItem')
const User = require('./models/user')
const Product = require('./models/product')

const multer = require('multer')

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.static(path.join(__dirname, '../client/build')))
app.use(cors({
    origin: "*",
}));

app.use(bodyParser.json());
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, 'images')));

// app.use(cartRoutes)
app.use(paymentRoutes)
app.use('/auth', authRoutes)
// app.use('/dashboard/api/admin', adminRoutes)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use((error, req, res, next) => {
    const status = error.statusCode || 500; // its  object we created .statusCode
    const message = error.message // exists default after passing value in new Error('this');
    const data = error.data
    res.status(status).json({ message: message, data: data })
})


// User.hasMany(CartItem, { foreignKey: 'userId' })
// CartItem.belongsTo(User, { foreignKey: 'userId' })

// User.hasMany(Product, { foreignKey: 'userId' })
// Product.belongsTo(User, { foreignKey: 'userId' })

sequelize.sync()
    .then(result => {
        app.listen(5001, () => {
            console.log('port is listening to this ha');
        })
    })
    .catch(err => {
        console.error('clg er', err.original);
    })
