// import React, { useState, useEffect } from 'react';
// import 'braintree-web';
// import axios from 'axios';
// import { BraintreeDropIn } from 'braintree-web-react';
// import DropIn from 'braintree-web-drop-in-react'

// const PaymentForm = () => {
//   // const [clientToken, setClientToken] = useState(null);
//   const [requestFailed, setRequestFailed] = useState(false);
//   const [fruits, setFruits] = useState({
//     Apple: { quantity: 0, price: 0 },
//     Orange: { quantity: 0, price: 0 },
//     Banana: { quantity: 0, price: 0 },
//     Grapes: { quantity: 0, price: 0 },
//     Mango: { quantity: 0, price: 0 }
//   });
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [response, setResponse] = useState({});
//   const [values, setValues] = useState({
//     clientToken: null,
//     success: '',
//     error: '',
//     instance: ''
//   })

//   const fruitsList = [
//     { name: 'Apple', price: 5 },
//     { name: 'Orange', price: 5 },
//     { name: 'Banana', price: 2 },
//     { name: 'Grapes', price: 10 },
//     { name: 'Mango', price: 5 }
//   ];

//   const getClientToken = () => {
//     return fetch('/generate/token', {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       .then(response => response.json())
//       .catch(err => console.log(err))
//     // const response = axios.get('/requestToken');
//     // const clientToken = response.data.response.clientToken;
//     // setClientToken(clientToken);
//     // setRequestFailed(true);
//   };

//   // const reset = async () => {
//   //   setClientToken(null);
//   //   setRequestFailed(false);
//   //   getClientToken();
//   // };

//   const makePayment = (data) => {
//     return fetch('/process/payment', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: JSON.stringify(data)
//     })
//       .then(response => response.json())
//       .catch(err => console.log(err))


//     // try {
//     //   // const { nonce } = await instance.requestPaymentMethod();
//     //   const response = axios.post('/payment', {
//     //     paymentMethodNonce: clientToken,
//     //     price: totalPrice
//     //   });
//     //   setResponse(response);
//     // } catch (err) {
//     //   console.error(err);
//     //   setRequestFailed(true);
//     // }
//   };
//   const getToken = () => {
//     getClientToken().then(({ response }) => {
//       console.log(response);
//       if (response.err) {
//         setValues({ ...values, error: response.err })
//       } else {
//         setValues({ ...values, clientToken: response.clientToken })
//       }
//     })
//   }

//   const addToCart = (name, price) => {
//     setFruits((prevFruits) => ({
//       ...prevFruits,
//       [name]: {
//         quantity: prevFruits[name].quantity + 1,
//         price: prevFruits[name].price + price
//       }
//     }));
//     setTotalPrice((prevTotalPrice) => prevTotalPrice + price);
//   };

//   const removeFromCart = (name, price) => {
//     if (fruits[name].quantity > 0) {
//       setFruits((prevFruits) => ({
//         ...prevFruits,
//         [name]: {
//           quantity: prevFruits[name].quantity - 1,
//           price: prevFruits[name].price - price
//         }
//       }));
//       setTotalPrice((prevTotalPrice) => prevTotalPrice - price);
//     }
//   };

//   const renderFruit = (name, price) => (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         width: '60%',
//         height: '100%',
//         paddingBottom: '5px'
//       }}
//       key={name}
//     >
//       <div style={{ width: '100px' }}>Name: {name}</div>
//       <div style={{ width: '100px' }}>Price: {price}{'$ each'}</div>
//       <button
//         style={{
//           width: '30px',
//           height: '30px',
//           fontSize: '16px',
//           borderRadius: '4px'
//         }}
//         onClick={() => addToCart(name, price)}
//       >
//         +
//       </button>
//       <button
//         style={{
//           width: '30px',
//           height: '30px',
//           fontSize: '16px',
//           borderRadius: '4px'
//         }}
//         onClick={() => removeFromCart(name, price)}
//       >
//         -
//       </button>
//     </div>
//   );

//   const renderCart = () => {
//     const cart = Object.entries(fruits).map(([key, value]) => {
//       if (value.quantity) {
//         return (
//           <div key={key}>
//             <div>
//               {key} {': '} {value.quantity} {', Price: '}{value.price}
//             </div>
//           </div>
//         );
//       }
//       return null;
//     });

//     return (
//       <div>
//         {cart}
//         <div>Total Price: {totalPrice}</div>
//       </div>
//     );
//   };

//   const responseLoaded = Boolean(Object.keys(response).length);
//   let responseMessage = '';
//   if (Object.keys(response).length) {
//     responseMessage = `Your purchase has been successful. Charged ${response.data.transaction.amount}\$`;
//   }

//   useEffect(() => {
//     getToken();
//   }, []);

//   const { clientToken, success, error, instance } = values

//   const onPurchase = () => {
//     instance.requestPaymentMethod()
//       .then(data => {
//         let nonce = data.nonce
//         let paymentData = {
//           payment_method_nonce: nonce,
//           amount: getAmount()
//         }

//         makePayment(paymentData).then(response => {
//           console.log("responsEE", response);
//           if (response.err) {
//             setValues({ ...values, error: response.err })
//           }
//           else {
//             setValues({ ...values, error: "", success: response.success })
//           }
//         })
//           .catch(err => {
//             setValues({ ...values, error: err, success: '' })
//           })

//       })
//   }

//   const getAmount = () => {
//     let amount = 0;
//     // cartProduct.map((data, i) => {
//     //   amount = amount + data.amount
//     // })
//     return 25;
//   }

//   return (
//     // <div
//     //   style={{
//     //     display: 'flex',
//     //     flexDirection: 'column',
//     //     justifyContent: 'space-evenly',
//     //     alignItems: 'center',
//     //     width: '100%',
//     //     height: '100%'
//     //   }}
//     // >
//     //   <div
//     //     style={{
//     //       display: 'flex',
//     //       flexDirection: 'column',
//     //       justifyContent: 'space-around',
//     //       alignItems: 'center',
//     //       width: '100%',
//     //       height: '100%'
//     //     }}
//     //   >
//     //     <h2>Buy Fruits Using Braintree</h2>
//     //     {fruitsList.map((fruit) => renderFruit(fruit.name, fruit.price))}
//     //     {renderCart()}
//     //   </div>

//     //   <div style={{ width: '50%' }}>
//     //     <BraintreeDropIn
//     //       options={{ authorization: clientToken }}
//     //       onInstance={(instance) => (window.instance = instance)}
//     //     />
//     //   </div>

//     //   <button
//     //     style={{
//     //       width: '120px',
//     //       height: '30px',
//     //       fontSize: '16px',
//     //       borderRadius: '4px',
//     //       marginTop: '10px'
//     //     }}
//     //     onClick={buy}
//     //   >
//     //     Purchase
//     //   </button>

//     //   <div>
//     //     <h3>{responseMessage}</h3>
//     //   </div>
//     //   {responseLoaded && (
//     //     <div>Transaction Id: {response.data.transaction.id}</div>
//     //   )}
//     //   {responseLoaded && (
//     //     <div>Customer Id: {response.data.transaction.customer.id}</div>
//     //   )}
//     //   {responseLoaded && (
//     //     <div>Price Charged: {response.data.transaction.amount}</div>
//     //   )}
//     // </div>
//     <div>
//       {clientToken && (
//         <div>
//           <DropIn
//             options={{ authorization: clientToken }}
//             onInstance={(instance) => setValues({ ...values, instance: instance })}
//           />
//           <button onClick={onPurchase}>Buy</button>
//         </div>
//       )}
//       {!clientToken && <h1>Loading ...</h1>}
//     </div>
//   );
// };

// export default PaymentForm;








import { PayPalButtons } from '@paypal/react-paypal-js'
import React from 'react'

const PaymentForm = () => {

  const serverUrl = "http://localhost:8080"

  const createOrder = (data) => {
    // Order is created on the server and the order id is returned
    return fetch(`/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product skus and quantities
      body: JSON.stringify({
        cart: [
          {
            description: "Wood Candy Sofa",
            cost: "399.00"
          }
        ]
      }),
    })
      .then((response) => response.json())
      .then((orderData) => {
        if (orderData) {
          console.log('orderdataaa', orderData);
          return orderData.id
        } else {
          const errorDetail = orderData?.details?.[0];
          const errorMessage = errorDetail
            ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
            : JSON.stringify(orderData);
          throw new Error(errorMessage);
        }
      })
      .catch(error => {
        console.log('erorir', error);
      })
  };
  const onApprove = (data) => {
    console.log('dataa', data);
    // Order is captured on the server and the response is returned to the browser
    return fetch(`/api/orders/${data.orderID}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   orderID: data.orderID
      // })
    })
      .then((response) => {
        console.log("Payment Successfull");
        return response.json()
      })
      .then(orderData => {

        const errorDetail = orderData?.details?.[0];
        // if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
        //   // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
        //   // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
        //   return actions.restart();
        // } else 
        if (errorDetail) {
          console.log('errordetail', errorDetail);
          throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
        } else if (!orderData.purchase_units) {
          throw new Error(JSON.stringify(orderData));
        } else {
          // (3) Successful transaction -> Show confirmation or thank you message
          // Or go to another URL:  actions.redirect('thank_you.html');
          const transaction =
            orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
            orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
          console.log(
            `Transaction ${transaction.status}: ${transaction.id}<br><br>See console for all available details`,
          );
          console.log(
            "Capture result",
            orderData,
            JSON.stringify(orderData, null, 2),
          );
        }
      })
      .catch(error => {
        console.log('errorlast', error);
      })
  };


  function onError(err) {
    console.log('on Error: ', err);
  }

  function onCancel(data) {
    console.log('on Cancel: ', data);
  }
  return (
    <div>
      <PayPalButtons
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
        onError={(data) => onError(data)}
        onCancel={(data) => onCancel(data)}
      />
    </div>
  )
}

export default PaymentForm