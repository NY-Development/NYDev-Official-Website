
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Linkedin, Github } from 'lucide-react';

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') {
      return true;
    }
    const storedTheme = window.localStorage.getItem('nydev-theme');
    if (storedTheme === 'light') {
      return false;
    }
    if (storedTheme === 'dark') {
      return true;
    }
    return true;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    window.localStorage.setItem('nydev-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-midnight font-display selection:bg-primary/30 text-slate-900 dark:text-white">
      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-5 dark:opacity-20 pointer-events-none" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-white/5 bg-white/70 dark:bg-midnight/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
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

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="hidden md:flex size-10 rounded-full items-center justify-center border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-primary transition-all"
              title="Toggle Theme"
            >
              <span className="material-symbols-outlined">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <Link to="/login" className="hidden md:block bg-primary hover:bg-blue-600 text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-all shadow-neon-blue">
              Start a Project
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden size-11 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-900 dark:text-white flex items-center justify-center transition-all hover:border-primary/40 hover:text-primary"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined !text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden border-t border-slate-200 dark:border-white/5 transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className={`px-6 pb-6 pt-4 transition-all duration-500 ${
              isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
            }`}
          >
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/[0.03] shadow-[0_12px_40px_rgba(15,23,42,0.18)] dark:shadow-[0_20px_60px_rgba(15,23,42,0.4)]">
              <div className="px-5 pt-5 pb-3 text-[10px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 font-bold">
                Navigation
              </div>
              <div className="px-4 pb-4 grid gap-2">
                {[
                  { name: 'Services', path: '/services' },
                  { name: 'Work', path: '/work' },
                  { name: 'About', path: '/about' },
                  { name: 'Insights', path: '/insights' },
                  { name: 'Careers', path: '/careers' },
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-between rounded-xl border border-transparent px-4 py-3 text-sm font-semibold transition-all ${
                      location.pathname === item.path
                        ? 'bg-primary/10 text-primary border-primary/20'
                        : 'text-slate-700 dark:text-slate-200 hover:border-primary/20 hover:bg-primary/10'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="material-symbols-outlined !text-base">north_east</span>
                  </Link>
                ))}
              </div>
              <div className="px-4 pb-5 flex items-center justify-between gap-3">
                <button
                  onClick={toggleTheme}
                  className="flex-1 h-11 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-[0.2em] hover:text-primary hover:border-primary/30 transition-all"
                >
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </button>
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="flex-1 h-11 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center shadow-neon-blue"
                >
                  Start Project
                </Link>
              </div>
            </div>
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
                  {/* To add icons from lucide-react */}
                   <li className="flex items-center gap-2"><Github className="w-4 h-4" /> <a href="https://github.com/NY-Development" className="hover:text-primary transition-colors">GitHub</a></li>
                   <li className="flex items-center gap-2"><Linkedin className="w-4 h-4" /> <a href="https://www.linkedin.com/in/nydev-company-43827a399/" className="hover:text-primary transition-colors">LinkedIn</a></li>
                   <li className="flex items-center gap-2"><Instagram className="w-4 h-4" /> <a href="https://www.instagram.com/nydevofficial" className="hover:text-primary transition-colors">Instagram</a></li>
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