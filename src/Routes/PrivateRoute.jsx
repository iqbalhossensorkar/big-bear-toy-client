import React, { Children, useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';
import Lottie from "lottie-react";
import load from '../assets/red-colour-loading-animation.json'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    // console.log(user, loading);
    if (loading) {
        return <div className=' flex h-screen justify-center items-center'>
            <Lottie className='w-36' animationData={load} loop={true}></Lottie>
        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login"  state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;