import { useEffect, createContext, useState } from 'react'
import axios from 'axios'

export const PaymentContext = createContext();

export const PaymentProvider = props => {
    const [tokenObject, setTokenObject] = useState({})
    const [isPaymentMade, setIsPaymentMade] = useState(false)
    const [transactionData, setTransactionData] = useState({})

    useEffect(() => {
        getToken()
    }, [])

    const getToken = async () => {
        let result = await axios('/initializeBraintree', { withCredentials: true })
        const tokenObject = result.data.data;
        setTokenObject(tokenObject);
    }

    const paymentTransaction = async (data) => {
        // console.log(Urls.ConfirmUrl);
        let result = await axios.post('/confirmBraintree', data, { withCredentials: true });
        setTransactionData(result.data.data);
        setIsPaymentMade(true);

    }


    return (
        <PaymentContext.Provider value={{ tokenObject, paymentTransaction, isPaymentMade, setIsPaymentMade, transactionData, setTransactionData }}>
            {props.children}
        </PaymentContext.Provider>
    );
}