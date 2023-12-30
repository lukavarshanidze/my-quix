import { useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"

const GetData = async () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const location = useLocation()
    // console.log(location);

    try {
        const response = await axios('api/admin/get-products')
        setData(response.data)
        setLoading(false)
    } catch (error) {
        console.log('err', error);
    }
    
    console.log('data', data);
    return { data, loading }
}

export default GetData