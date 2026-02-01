
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-midnight font-display selection:bg-primary/30 text-slate-900 dark:text-white">
      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-5 dark:opacity-20 pointer-events-none" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-white/5 bg-white/70 dark:bg-midnight/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary border border-primary/20">
              <span className="material-symbols-outlined !text-2xl">code_blocks</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tighter uppercase">NYDev</h2>
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            {[
              { name: 'Services', path: '/services' },
              { name: 'Work', path: '/work' },
              { name: 'About', path: '/about' },
              { name: 'Insights', path: '/insights' },
              { name: 'Careers', path: '/careers' },
            ].map(item => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`text-sm font-medium tracking-wide transition-colors ${
                  location.pathname === item.path 
                    ? 'text-primary' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="size-10 rounded-full flex items-center justify-center border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-primary transition-all"
              title="Toggle Theme"
            >
              <span className="material-symbols-outlined">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <Link to="/login" className="hidden sm:block bg-primary hover:bg-blue-600 text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-all shadow-neon-blue">
              Start a Project
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {children}
      </div>

      {/* Shared Footer */}
      <footer className="border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-midnight pt-20 pb-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="size-7 bg-primary/20 rounded flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined !text-lg">code_blocks</span>
                </div>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold tracking-tighter uppercase">NYDev Inc.</h2>
              </div>
              <p className="text-slate-500 dark:text-slate-500 text-sm max-w-xs font-light">
                Architecting the digital nervous systems of tomorrow. High-precision engineering for the AI era.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
               <div>
                 <h4 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-widest mb-6">Network</h4>
                 <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
                   <li><a href="https://github.com/nydev" className="hover:text-primary transition-colors">GitHub</a></li>
                   <li><a href="https://linkedin.com/company/nydev" className="hover:text-primary transition-colors">LinkedIn</a></li>
                   <li><a href="https://twitter.com/nydev" className="hover:text-primary transition-colors">Twitter</a></li>
                 </ul>
               </div>
               <div>
                 <h4 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-widest mb-6">Legal</h4>
                 <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
                   <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                   <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                 </ul>
               </div>
               <div className="hidden md:block">
                 <h4 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-widest mb-6">HQ</h4>
                 <p className="text-slate-500 dark:text-slate-400 text-sm">
                   One World Trade Center<br />
                   New York, NY 10007
                 </p>
               </div>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-slate-400 dark:text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">© 2024 NYDev Inc. All rights reserved.</p>
             <div className="flex items-center gap-2 text-slate-400 dark:text-slate-600 text-[10px] font-bold tracking-widest">
               <div className="size-1.5 rounded-full bg-emerald-500" />
               SYSTEM STATUS: OPERATIONAL
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;