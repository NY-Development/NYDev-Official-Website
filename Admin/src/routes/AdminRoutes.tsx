import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '../components/layout/AdminLayout';
import DashboardPage from '../pages/Dashboard';
import ProjectsPage from '../pages/Projects';
import TeamPage from '../pages/Team';
import ContentPage from '../pages/Content';
import UsersPage from '../pages/Users';
import SettingsPage from '../pages/Settings';
import LoginPage from '../pages/Auth/Login';
import SignupPage from '../pages/Auth/Signup';
import VerifyOtpPage from '../pages/Auth/VerifyOTP';
import ForgotPasswordPage from '../pages/Auth/ForgotPassword';
import ResetPasswordPage from '../pages/Auth/ResetPassword';
import AdminLandingPage from '../pages/Landing';
import ProtectedRoute from './ProtectedRoute';

const AdminRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/verify-otp" element={<VerifyOtpPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="content" element={<ContentPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default AdminRoutes;
