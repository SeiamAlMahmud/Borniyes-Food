import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(()=> {
        // navigate('/login', {state: location.pathname})
    },[])
    // console.log(location)
    return (
        <>
            {children}
        </>
    )
}

export default PrivateRoute