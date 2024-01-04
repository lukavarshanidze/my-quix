import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import 'react-toastify/dist/ReactToastify.css'


const initialOptions = {
  clientId: "AUtboAr1p9NRYQgOQD-Y3bcsnFef7nySqeqC7gIx77u5SmmXrjJqeupUWQg5t_HBX3enM1zAwkzQ8ydh",
  currency: "USD",
  intent: "capture",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PayPalScriptProvider options={initialOptions}>
        <Provider store={store}>
          <ToastContainer
            theme="dark"
            position="top-right"
            autoClose={2000}
            closeOnClick
            pauseOnHover={false}
            style={{ marginTop: '50px' }}
          />

          <App />
        </Provider>
      </PayPalScriptProvider>
    </BrowserRouter>
  </React.StrictMode>
);
