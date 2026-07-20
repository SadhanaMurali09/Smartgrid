import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

const AppAdmin = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-[#030712] text-slate-200 font-sans">
          <main className="flex-grow">
            <Routes>
              <Route path="/login" element={<AdminLogin />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              {/* Redirect root to login */}
              <Route path="/" element={<Navigate to="/login" replace />} />
              {/* Catch-all redirect to login */}
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default AppAdmin;
