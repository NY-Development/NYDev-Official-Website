
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/Public/Services';
import WorkPage from './pages/Public/Work';
import AboutPage from './pages/Public/About';
import InsightsPage from './pages/Public/Insights';
import CareersPage from './pages/Public/Careers';
import ContactPage from './pages/Public/Contact';
import MissionControl from './pages/Dashboard/MissionControl';
import ModelRegistry from './pages/Dashboard/ModelRegistry';
import Infrastructure from './pages/Dashboard/Infrastructure';
import Analytics from './pages/Dashboard/Analytics';
import Deployments from './pages/Dashboard/Deployments';
import Projects from './pages/Dashboard/Projects';
import Settings from './pages/Dashboard/Settings';
import WizardIdentity from './pages/Wizard/WizardIdentity';
import WizardStack from './pages/Wizard/WizardStack';
import WizardConfig from './pages/Wizard/WizardConfig';
import WizardReview from './pages/Wizard/WizardReview';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import MFA from './pages/Auth/MFA';
import DashboardLayout from './components/DashboardLayout';
import PublicLayout from './components/PublicLayout';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes Wrapped in PublicLayout */}
        <Route element={<div className="contents"><PublicLayout children={<LandingPage />} /></div>}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        <Route path="/services" element={<PublicLayout><ServicesPage /></PublicLayout>} />
        <Route path="/work" element={<PublicLayout><WorkPage /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
        <Route path="/insights" element={<PublicLayout><InsightsPage /></PublicLayout>} />
        <Route path="/careers" element={<PublicLayout><CareersPage /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mfa" element={<MFA />} />

        {/* Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/mission" element={<MissionControl />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/deployments" element={<Deployments />} />
          <Route path="/models" element={<ModelRegistry />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Wizard Routes */}
        <Route path="/wizard/identity" element={<WizardIdentity />} />
        <Route path="/wizard/stack" element={<WizardStack />} />
        <Route path="/wizard/config" element={<WizardConfig />} />
        <Route path="/wizard/review" element={<WizardReview />} />

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
