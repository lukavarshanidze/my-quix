import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

import AddProducts from '../admin/AddProducts'
import AllProducts from '../admin/AllProducts'
import ProtectedRoute from './ProtectedRoute'
import { useLocation } from 'react-router-dom';
import Dashboard from '../admin/Dashboard'
import Users from '../admin/Users'
import PrivacyPolicy from '../pages/Privacy'
import { useEffect } from 'react'
import About from '../pages/About'

const Routers = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

return <Routes>
  <Route path='/' element={<Navigate to={'home'} />} />
  <Route path='/home' element={<Home />} />
  <Route path='/shop' element={<Shop />} />
  <Route path='/shop/:id' element={<ProductDetails />} />
  <Route path='/shop-category/:product' element={<Shop />} />
  <Route path='/cart' element={<Cart />} />
  <Route path='/about-us' element={<About />} />
  <Route path='/checkout' element={<Checkout />} />
  <Route path='/privacy' element={<PrivacyPolicy />} />

  {/* <Route path="/*" element={<ProtectedRoute />}> */}
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="dashboard/all-products" element={<AllProducts />} />
  <Route path="dashboard/add-products" element={<AddProducts />} />
  <Route path="dashboard/users" element={<Users />} />
  {/* </Route> */}

  <Route path='/login' element={<Login />} />
  <Route path='/signup' element={<Signup />} />
</Routes>
}

export default Routers