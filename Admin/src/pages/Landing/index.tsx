import React from 'react';
import { Link } from 'react-router-dom';

const AdminLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-midnight text-white flex items-center justify-center px-6">
      <div className="w-full max-w-4xl glass-panel p-10 sm:p-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-brand-electric rounded-lg flex items-center justify-center shadow-lg">
            <span className="material-icons text-white text-sm">terminal</span>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">NYDev Admin</p>
            <h1 className="text-3xl sm:text-4xl font-bold">Command the Platform</h1>
          </div>
        </div>

        <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
          Secure access to projects, teams, content, and system configuration. Built for high-velocity ops with a dark, futuristic interface.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          {[
            { label: 'Projects', detail: 'Monitor deployments and roadmaps.', icon: 'assignment' },
            { label: 'Team', detail: 'Manage roles and active status.', icon: 'groups' },
            { label: 'Content', detail: 'Ship CMS updates with confidence.', icon: 'layers' },
          ].map((item) => (
            <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <span className="material-icons text-brand-electric mb-3">{item.icon}</span>
              <h3 className="font-semibold">{item.label}</h3>
              <p className="text-xs text-slate-400 mt-2">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link to="/login" className="btn-primary px-6 py-3 text-center">
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-brand-electric/60 transition-all text-center"
          >
            Request Access
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLandingPage;
