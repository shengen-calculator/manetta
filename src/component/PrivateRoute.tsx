import React from 'react';
import { Navigate } from 'react-router-dom';

export type ProtectedRouteProps = {
    isAuthenticated: boolean;
    pathname: string;
    outlet: JSX.Element;
};

const PrivateRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, pathname, outlet }) => {
    if (isAuthenticated) {
        return outlet;
    } else {
        return <Navigate to="/login" state={{ from: pathname }} replace />;
    }
};
export default PrivateRoute;