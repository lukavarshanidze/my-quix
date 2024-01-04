import "./App.css";

import Layout from './components/Layout/Layout'
import { PaymentProvider } from "./PaymentContext";


function App() {
  return <PaymentProvider>
    <Layout></Layout>
  </PaymentProvider>
}

export default App;
