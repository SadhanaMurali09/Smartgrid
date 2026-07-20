import axios from 'axios';
import ADMIN_ROUTES from './routes';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || '/api',
});

// Attach token to every request
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('sg_admin_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Auto-logout on 401 responses
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('sg_admin_token');
            // Only redirect if we're on an admin page
            if (window.location.pathname.startsWith('/admin') ||
                window.location.pathname.startsWith('/dashboard') ||
                window.location.pathname.startsWith('/login')) {
                window.location.href = ADMIN_ROUTES.login;
            }
        }
        return Promise.reject(error);
    }
);

export default api;
