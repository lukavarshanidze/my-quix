require('dotenv').config()
const express = require('express')
// const paymentController = require('../controllers/payment')
const braintree = require('braintree')
// const { braintreeTokenController, brainTreePaymentController } = require('../controllers/carController')
const { UUID, UUIDV4 } = require('sequelize')
const router = express.Router()


const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PORT = 8888 } = process.env;
const base = "https://api-m.paypal.com";

const generateAccessToken = async () => {
    try {
        if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
            throw new Error("MISSING_API_CREDENTIALS");
        }
        const auth = Buffer.from(
            PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET,
        ).toString("base64");
        const response = await fetch(`${base}/v1/oauth2/token`, {
            method: "POST",
            body: "grant_type=client_credentials",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${auth}`,
            },
        });

        const data = await response.json();
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

    const url = `${base}/v2/checkout/orders`;
    generateAccessToken()
        .then(accessToken => {
            const order_data_json = {
                'intent': req.body.intent.toUpperCase(),
                'purchase_units': [
                    {
                        'amount': {
                            'currency_code': "USD",
                            'value': "1.00",
                        },
                    },
                ],
            };
            const data = JSON.stringify(order_data_json)

            fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${accessToken}`,
                    'PayPal-Request-Id': generate_randomm_uuid(),
                },
                method: "POST",
                body: data,
            })
                .then(res => res.json())
                .then(json => res.json({ json }))
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err })
        })
};

/**
* Capture payment for the created order to complete the transaction.
*/
router.post('/complete_order', (req, res) => {
    const orderID = req.body.order_id
    const intent = req.body.intent
    const url = `${base}/v2/checkout/orders/${orderID}/${intent}`;

    generateAccessToken()
        .then(accessToken => {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${accessToken}`,
                },
            })
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    res.json({ json })
                })
                .catch(err => {
                    console.log(err);
                    res.json({ err })
                })
        })

})

function generate_random_uuid() {
    const newIdentifier = new UUIDV4()
    return newIdentifier
}

router.post('/create_order', (req, res) => {
    const url = `${base}/v2/checkout/orders`;
    generateAccessToken()
        .then(accessToken => {
            const order_data_json = {
                'intent': req.body.intent.toUpperCase(),
                'purchase_units': [
                    {
                        'amount': {
                            'currency_code': "USD",
                            'value': "1.00",
                        },
                    },
                ],
            };
            const data = JSON.stringify(order_data_json)

            fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${accessToken}`,
                    'PayPal-Request-Id': generate_random_uuid(),
                },
                method: "POST",
                body: data,
            })
                .then(res => res.json())
                .then(json => res.json({ json }))
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err })
        })
})
// const captureOrder = async (orderID) => {
//     const accessToken = await generateAccessToken();
//     const url = `${base}/v2/checkout/orders/${orderID}/capture`;

//     fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             'Authorization': `Bearer ${accessToken}`,
//             // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
//             // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
//             // "PayPal-Mock-Response": '{"mock_application_codes": "INSTRUMENT_DECLINED"}'
//             // "PayPal-Mock-Response": '{"mock_application_codes": "TRANSACTION_REFUSED"}'
//             // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
//         },
//     })
//         .then(res => res.json())
//         .then(json => {
//             console.log(json);
//             res.json({ json })
//         })
//         .catch(err => {
//             console.log(err);
//             res.json({ err })
//         })
// };


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

// router.post("/api/orders", async (req, res) => {
//     try {
//         // use the cart information passed from the front-end to calculate the order amount detals
//         const { cart } = req.body;
//         const { jsonResponse, httpStatusCode } = await createOrder(cart);
//         res.status(httpStatusCode).json(jsonResponse);
//     } catch (error) {
//         console.error("Failed to create order:", error);
//         res.status(500).json({ error: "Failed to create order." });
//     }
// });

router.post("/api/orders/:orderID/capture", async (req, res) => {
    try {
        const { orderID } = req.params;
        const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("Failed to create order:", error);
        res.status(500).json({ error: "Failed to capture order." });
    }
});

// const gateway = new braintree.BraintreeGateway({
//     environment: braintree.Environment.Sandbox,
//     merchantId: 'vby2qdz363v2cmdy',
//     publicKey: 'vnz63ymjvpsqy54n',
//     privateKey: '5afe096d6c27b515a307a9b4a26a025f'
// });

// router.get('/generate/token', (req, res) => {
//     gateway.clientToken.generate({})
//         .then((response) => {
//             res.status(200).json({ response })
//         })
//         .catch(err => {
//             res.status(500).json({ err })
//         })

// });
// router.post('/process/payment', (req, res) => {
//     const nonceFromTheClient = req.body.payment_method_nonce;
//     const { amount } = req.body;
//     const id = randomnumber = Math.floor(Math.random() * 1000) + 100;
//     gateway.transaction.sale(
//         {
//             amount: amount,
//             paymentMethodNonce: nonceFromTheClient,
//             options: {
//                 submitForSettlement: true,
//             }
//         })
//         .then(response => res.status(200).json({ response }))
//         .catch(err => res.status(500).json({ err }))
// });


module.exports = router;

