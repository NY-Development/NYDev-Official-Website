import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface TopBarProps {
  onMenuClick: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onMenuClick }) => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const current = location.pathname.split('/').pop() || 'dashboard';
  const title = current === 'admin' ? 'Dashboard' : current.charAt(0).toUpperCase() + current.slice(1);

  return (
    <header className="h-20 border-b border-slate-800 flex items-center justify-between px-5 sm:px-6 lg:px-10 bg-[#0f1623]/80 backdrop-blur-md sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="lg:hidden size-10 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-primary/40"
          onClick={onMenuClick}
          aria-label="Open navigation"
        >
          <span className="material-icons">menu</span>
        </button>
        <div className="flex flex-col">
        <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-[0.3em] font-semibold">
          <span>Admin</span>
          <span className="material-icons text-[10px]">chevron_right</span>
          <span className="text-primary">{title}</span>
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
          <input
            className="bg-slate-900/70 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none"
            placeholder="Search admin data..."
            type="text"
          />
        </div>
        <button className="relative p-2 text-slate-500 hover:bg-slate-800 rounded-lg transition-colors">
          <span className="material-icons">notifications</span>
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#0f1623]"></span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold leading-none">{user?.name || 'Admin User'}</p>
            <p className="text-xs text-slate-500 mt-1">{user?.role || 'Admin'}</p>
          </div>
          <button
            onClick={logout}
            className="w-10 h-10 rounded-xl overflow-hidden bg-primary/10 border border-primary/20 flex items-center justify-center"
          >
            <span className="material-icons text-primary text-sm">logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
