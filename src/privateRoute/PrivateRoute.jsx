import React, { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext)
    let loacation = useLocation()
    if(loading){
        return
    }
    if(user) {
        return children
    }
    return  <Navigate to='/login'  state={{from:location}} replace></Navigate>

};

export default PrivateRoute;