import { createSlice } from "@reduxjs/toolkit";

const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
    currentUser: '',
    cartItems: storedCartItems.cartItems || [],
    totalAmount: storedCartItems.totalAmount || 0,
    totalQuantity: storedCartItems.totalQuantity || 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id)

            state.totalQuantity++
            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            };

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            );

            localStorage.setItem('cart', JSON.stringify(state));

        },

        minusItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);

            if (existingItem && existingItem.quantity > 1) {
                state.totalQuantity--
                existingItem.quantity--
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(newItem.price)
            }

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            );

            localStorage.setItem('cart', JSON.stringify(state));
        },

        deleteItem: (state, action) => {
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id)

            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity

                state.totalAmount = state.cartItems.reduce(
                    (total, item) => total + Number(item.price) * Number(item.quantity),
                    0
                );

            }
            localStorage.setItem('cart', JSON.stringify(state));
        },

        setCurrentUser: (state, action) => {
            const userToken = action.payload.token;
            const userName = action.payload.userName;
            state.currentUser = { userToken, userName }
            localStorage.setItem('currentUser', userToken)
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer