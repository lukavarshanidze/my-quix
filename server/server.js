require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const cartRoutes = require('./routes/cart')
const authRoutes = require('./routes/auth')

const sequelize = require('./utils/database')
const CartItem = require('./models/cartItem')
const User = require('./models/user')

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
app.use(express.urlencoded({ extended: true }));

app.use(cartRoutes)
app.use('/auth', authRoutes)


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use((error, req, res, next) => {
    const status = error.statusCode || 500; // its  object we created .statusCode
    const message = error.message // exists default after passing value in new Error('this');
    const data = error.data
    console.log('aqaa erori', status, message, data);
    res.status(status).json({ message: message, data: data })
})


User.hasMany(CartItem, { foreignKey: 'userId' })
CartItem.belongsTo(User, { foreignKey: 'userId' })

sequelize.sync()
    .then(result => {
        app.listen(5001, () => {
            console.log('port is listening to this ha');
        })
    })
    .catch(err => {
        console.log(err);
    })
