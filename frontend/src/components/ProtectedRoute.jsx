import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ADMIN_ROUTES from '../utils/routes';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-900">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-slate-400 text-sm">Verifying access...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to={ADMIN_ROUTES.login} replace />;
    }

    return children;
};

export default ProtectedRoute;
