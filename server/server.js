require('dotenv').config()
// const paypal = require('@paypal/checkout-server-sdk')
const paypal = require('./paypal-api')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')

const cartRoutes = require('./routes/cart')
const paymentRoutes = require('./routes/payment')

const sequelize = require('./utils/database')
const Cart = require('./models/User')
const CartItem = require('./models/cartItem')
const User = require('./models/User')
const { UUID, UUIDV4 } = require('sequelize')

const app = express()

const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_SECRET_ID;
// const environment = new paypal.core.LiveEnvironment(clientId, clientSecret)
// const client = new paypal.core.PayPalHttpClient(environment)
const port = process.env.PORT || 8080

const _dirname = path.dirname("")
const buildpath = path.join(__dirname, "../client/build")
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
// app.use(paymentRoutes)

// This middleware will only execute if the previous route did not match
app.use((req, res, next) => {
    next();
});

// app.use((req, res, next) => {
    // res.sendFile(
    //     path.join(__dirname, "../client/build/index.html"),
    //     (err) => {
    //         if (err) {
    //             console.log('error senging');
    //             return res.status(500).json({ err: 'err' });
    //         }
    //     }
    // );
    // next()
//     const filePath = path.join(__dirname, "../client/build/index.html");
//     fs.readFile(filePath, 'utf-8', (err, data) => {
//         if (err) {
//             console.log('error reading file:', err);
//             return res.status(500).json({ err: 'err' })
//         }
//         res.send(data)
//         next()
//     })
// });
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

// app.get('/payment')


// const endpoint_url = environment === 'sandbox' ? 'https://api-m.sandbox.paypal.com' : 'https://api-m.paypal.com'


// const getCartItem = (itemId) => {
//     return CartItem.findByPk(parseInt(itemId))
//         .then(item => {
//             if (item) {
//                 console.log(item.price, item.name, item.quantity);
//                 return item
//             }
//             console.log('erroria');
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }

const { PAYPAL_CLIENT_ID, PAYPAL_SECRET_ID } = process.env;
const base = "https://api-m.paypal.com";
// const base = "https://api-m.sandbox.paypal.com";
//https://api.paypal.com

// const paypalRoute = require('./paypal-node/routes/paymentRoute')
// app.use('/api', paypalRoute)


const generateAccessToken = async () => {
    try {
        if (!PAYPAL_CLIENT_ID || !PAYPAL_SECRET_ID) {
            throw new Error("MISSING_API_CREDENTIALS");
        }
        const auth = `${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET_ID}`
        // const auth = Buffer.from(
        //     `${PAYPAL_CLIENT_ID} + ":" + PAYPAL_SECRET_ID`,
        // ).toString("base64");
        const response = await fetch(`${base}/v1/oauth2/token`, {
            method: "POST",
            body: "grant_type=client_credentials",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${Buffer.from(auth).toString('base64')}`,
            },
        });
        const data = await response.json();
        console.log('dataaa', data);
        return data.access_token;
    } catch (error) {
        console.error("Failed to generate Access Token:", error);
    }
};
/**
 * Create an order to start the transaction.
 */
const createOrder = async (cart) => {
    // use the cart information passed from the front-end to calculate the purchase unit details
    console.log(
        "shopping cart information passed from the frontend createOrder() callback:",
        cart,
    );

    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders`;
    const payload = {
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: "1.00",
                },
            },
        ],
    };

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
            // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
            // "PayPal-Mock-Response": '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}'
            // "PayPal-Mock-Response": '{"mock_application_codes": "PERMISSION_DENIED"}'
            // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
        },
        method: "POST",
        body: JSON.stringify(payload),
    });

    // Database Updates with orderId


    return handleResponse(response);
};

/**
 * Capture payment for the created order to complete the transaction.
 * https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
const captureOrder = async (orderID) => {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders/${orderID}/capture`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
            // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
            // "PayPal-Mock-Response": '{"mock_application_codes": "INSTRUMENT_DECLINED"}'
            // "PayPal-Mock-Response": '{"mock_application_codes": "TRANSACTION_REFUSED"}'
            // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
        },
    });

    // Database Updates with orderId

    return handleResponse(response);
};

async function handleResponse(response) {
    try {
        const jsonResponse = await response.json();
        return {
            jsonResponse,
            httpStatusCode: response.status,
        };
    } catch (err) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }
}

function generate_random_uuid() {
    const newIdentifier = new UUIDV4()
    return newIdentifier
}

app.post("/api/orders", async (req, res) => {
    generateAccessToken()
        .then(access_token => {
            let order_data_json = {
                'intent': req.body.intent.toUpperCase(),
                'purchase_units': [{
                    'amount': {
                        'currency_code': 'USD',
                        'value': '5.00'
                    }
                }]
            }
            const data = JSON.stringify(order_data_json)
            console.log('data', data);
            fetch(`${base}/v2/checkout/orders`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`,
                    'PayPal-Request-Id': generate_random_uuid()
                },
                body: JSON.stringify({
                    intent: req.body.intent.toUpperCase(),
                    purchase_units: [{
                        amount: {
                            currency_code: 'USD',
                            value: '15.00'
                        }
                    }]
                })
            })
                .then(res => res.json())
                .then(json => { res.send(json) })//send minimal data to client
                .catch(err => { console.log(err); res.status(500).send(err) })
        })

    // try {
    //     // use the cart information passed from the front-end to calculate the order amount detals
    //     const { product } = req.body;
    //     const { jsonResponse, httpStatusCode } = await createOrder(product);
    //     console.log('moid');
    //     console.log(jsonResponse, httpStatusCode);
    //     res.status(httpStatusCode).json(jsonResponse);
    // } catch (error) {
    //     console.error("Failed to create order:", error);
    //     res.status(500).json({ error: "Failed to create order." });
    // }
});

app.post('/complete_order', (req, res) => {
    generateAccessToken()
        .then(access_token => {
            fetch(base + '/v2/checkout/orders/' + req.body.order_id + '/' + req.body.intent, {
                method: "POST", headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`
                }
            })
                .then(res => res.json())
                .then(json => { console.log(json); res.send(json) })
        })
        .catch(err => { console.log(err); res.status(500).send(err) })
})

app.post("/api/orders/:orderID/capture", async (req, res) => {
    try {
        const { orderID } = req.params;
        const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
        console.log(httpStatusCode, jsonResponse);
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("Failed to create order:", error);
        res.status(500).json({ error: "Failed to capture order." });
    }
});



// app.post('/api/payment', async (req, res) => {
//     try {
//         const totalPrice = req.body.items.reduce((sum, item) => {
//             return sum + 0.01 * item.quantity
//         }, 0)
//         console.log(totalPrice, 'tt');
//         const shippingFee = 0
//         let request = new paypal.orders.OrdersCreateRequest();
//         request.prefer("return=representation");
//         request.requestBody({
//             intent: "CAPTURE",
//             application_context: {
//                 brand_name: "Printer",
//                 landing_page: "BILLING",
//                 user_action: "CONTINUE",
//             },
//             purchase_units: [{
//                 reference_id: "PUHF",
//                 description: "payment for XY company",
//                 soft_descriptor: "Printing Fashion",
//                 amount: {
//                     currency_code: "USD",
//                     value: totalPrice,
//                     breakdown: {
//                         item_total: {
//                             currency_code: "USD",
//                             value: totalPrice,
//                         },
//                         shipping: {
//                             currency_code: "USD",
//                             value: shippingFee,
//                         },
//                     },
//                 },
//                 // [ { id: 1, qty: 1}, { id: 2, qty: 2} ]
//                 items: req.body.items.map(item => {
//                     const storeItem = item;
//                     return {
//                         name: item.name,
//                         unit_amount: {
//                             currency_code: 'USD',
//                             value: 0.01
//                         },
//                         quantity: item.quantity
//                     }
//                 }),
//                 // shipping: {
//                 //     name: {
//                 //         full_name: ""
//                 //     }
//                 // }
//             }],
//         });
//         const response = await client.execute(request);
//         console.log("Respons: ", JSON.stringify(response));
//         const orderID = response.result.id;
//         console.log("Order: ", JSON.stringify(response.result));
//         const resJson = {
//             orderID
//         };
//         res.json(resJson)
//     } catch (error) {
//         console.log(error);
//         return res.status(500)
//     }
// })

// app.post("/api/paypal-transaction-complete", async (req, res) => {
//     const orderID = req.body.orderID;
//     const request = new paypal.orders.OrdersCaptureRequest(orderID);
//     request.requestBody({});
//     try {
//         const capture = await client.execute(request);
//         console.log(`Response: ${JSON.stringify(capture)}`);
//         console.log(`Capture: ${JSON.stringify(capture.result)}`);
//         const result = capture.result;
//         const resJson = {
//             result
//         };
//         res.json(resJson);
//         // return capture.result;
//     } catch (err) {
//         // Handle any errors from the call
//         console.error(err);
//         return res.send(500);
//     }
// });




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
