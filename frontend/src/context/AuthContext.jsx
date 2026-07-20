import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/api';

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('sg_admin_token'));
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(null);

    // Verify token on mount
    useEffect(() => {
        const verifyToken = async () => {
            const storedToken = localStorage.getItem('sg_admin_token');
            if (!storedToken) {
                setLoading(false);
                return;
            }

            try {
                const response = await api.get('/auth/verify');
                setIsAuthenticated(true);
                setAdmin(response.data.admin);
                setToken(storedToken);
            } catch (error) {
                // Token invalid or expired
                localStorage.removeItem('sg_admin_token');
                setToken(null);
                setIsAuthenticated(false);
                setAdmin(null);
            } finally {
                setLoading(false);
            }
        };

        verifyToken();
    }, []);

    const login = async (username, password) => {
        const response = await api.post('/auth/login', { username, password });
        const { token: newToken, admin: adminData } = response.data;

        localStorage.setItem('sg_admin_token', newToken);
        setToken(newToken);
        setIsAuthenticated(true);
        setAdmin(adminData);

        return response.data;
    };

    const logout = () => {
        localStorage.removeItem('sg_admin_token');
        setToken(null);
        setIsAuthenticated(false);
        setAdmin(null);
    };

    return (
        <AuthContext.Provider value={{
            token,
            isAuthenticated,
            loading,
            admin,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
