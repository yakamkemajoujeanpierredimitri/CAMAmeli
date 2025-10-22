import React from 'react';
import { useAuth } from '../../context/authContext';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ allowedRoles }) => {
    const { state } = useAuth();
    const { user, isAuthenticated, loading } = state;

    if (loading) {
        return <div>Loading...</div>; // Or a spinner component
    }

    if (!isAuthenticated) {
        return <Navigate to="/signin" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user?.role)) {
        return <Navigate to="/unauthorized" replace />; // Redirect to an unauthorized page
    }

    return <Outlet />;
};

export default PrivateRoute;