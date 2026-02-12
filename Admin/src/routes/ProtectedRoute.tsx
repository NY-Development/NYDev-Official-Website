import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, token, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0f1623] text-white flex items-center justify-center">
        <div className="text-xs uppercase tracking-[0.3em] text-slate-400">Loading Access</div>
      </div>
    );
  }

  if (!token || !user || user.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
