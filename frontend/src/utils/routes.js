// Navigation path helper
// In dev (unified app): paths are /admin/login, /admin/dashboard
// In admin subdomain build: paths are /login, /dashboard
const ADMIN_PREFIX = import.meta.env.VITE_ADMIN_PREFIX || '/admin';

export const ADMIN_ROUTES = {
    login: `${ADMIN_PREFIX}/login`,
    dashboard: `${ADMIN_PREFIX}/dashboard`,
};

export default ADMIN_ROUTES;
