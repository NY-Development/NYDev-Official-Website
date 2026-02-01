
import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { NAVIGATION, SYSTEM_NAV } from '../constants';

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a production environment, this would also clear session/auth tokens
    navigate('/');
  };

  return (
    <div className="flex h-screen w-full bg-midnight overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-card-border bg-navy/95 backdrop-blur-xl flex flex-col shrink-0">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined !text-2xl">code_blocks</span>
            </div>
            <div>
              <h1 className="text-white text-lg font-bold leading-tight">NYDev</h1>
              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Platform v3.1</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {NAVIGATION.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-primary/10 border border-primary/20 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className={`material-symbols-outlined ${isActive ? 'fill-1 text-primary' : ''}`}>
                  {item.icon}
                </span>
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}

          <div className="pt-6 pb-2">
            <p className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">System</p>
          </div>

          {SYSTEM_NAV.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-primary/10 border border-primary/20 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className={`material-symbols-outlined ${isActive ? 'fill-1 text-primary' : ''}`}>
                  {item.icon}
                </span>
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}

          <div className="pt-6 border-t border-card-border/30 mt-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-slate-400 hover:text-crimson-red hover:bg-crimson-red/10 group mt-2"
            >
              <span className="material-symbols-outlined group-hover:fill-1 transition-colors">logout</span>
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </nav>

        <div className="p-4 border-t border-card-border">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-card-dark/50 border border-card-border">
            <div className="size-10 rounded-full bg-cover bg-center ring-2 ring-card-border" 
                 style={{ backgroundImage: 'url(https://picsum.photos/id/64/100/100)' }} />
            <div className="overflow-hidden">
              <p className="text-white text-sm font-bold truncate">Alex Chen</p>
              <p className="text-slate-500 text-xs truncate">ML Engineer</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden bg-cyber-grid">
        {/* Top Header */}
        <header className="h-16 border-b border-card-border bg-midnight/80 backdrop-blur-md flex items-center justify-between px-8 z-10">
          <div className="flex items-center gap-4 flex-1">
             <div className="relative w-full max-w-md group">
               <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">search</span>
               <input 
                 className="w-full bg-navy/50 border border-card-border rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-all"
                 placeholder="Search platform..."
               />
             </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
               <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Cluster Active</span>
            </div>
            <div className="relative cursor-pointer text-slate-400 hover:text-white transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-0 right-0 size-2 bg-crimson-red rounded-full ring-2 ring-midnight" />
            </div>
            <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer transition-colors">help</span>
          </div>
        </header>

        {/* Dynamic Route Content */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;