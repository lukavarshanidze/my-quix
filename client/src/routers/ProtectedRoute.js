import { Navigate, Outlet } from "react-router-dom"
import { cartActions } from "../redux/slices/cartSlice"

const ProtectedRoute = () => {
    const { userToken } = cartActions(state => state.cart.currentUser)
    return userToken ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute