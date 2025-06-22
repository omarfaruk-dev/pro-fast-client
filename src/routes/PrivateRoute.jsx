import React from 'react';
import useAuth from '../hooks/useAuth';
import Spinner from '../pages/Shared/Spinner';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = (children) => {
    const {user, loading} = useAuth();
    const location = useLocation();


    if(loading){
        return <Spinner/>
    }

    if(!user){
        <Navigate state={location?.pathname} to="/login"/>
    }

    return children;
};

export default PrivateRoute;