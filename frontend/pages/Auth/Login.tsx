
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-midnight flex flex-col items-center justify-center font-display relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Back to Home Button */}
      <Link 
        to="/" 
        className="absolute top-10 left-10 z-20 flex items-center gap-2 text-slate-500 hover:text-white transition-all text-xs font-bold uppercase tracking-widest group"
      >
        <span className="material-symbols-outlined !text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
        Back to Home
      </Link>

      <div className="w-full max-w-[480px] px-6 relative z-10">
        <div className="bg-navy/70 border border-white/10 backdrop-blur-2xl rounded-3xl p-10 flex flex-col items-center gap-10 shadow-2xl">
          <div className="flex flex-col items-center text-center gap-4">
             <div className="size-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30 shadow-neon-blue">
               <span className="material-symbols-outlined !text-3xl">deployed_code</span>
             </div>
             <div>
               <h1 className="text-white text-3xl font-bold tracking-widest uppercase">NYDev</h1>
               <p className="text-slate-500 text-sm font-medium tracking-wide mt-1 uppercase">System Login</p>
             </div>
          </div>

          <form className="w-full space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/mfa'); }}>
             <div className="space-y-2">
               <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
               <div className="relative group">
                 <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">mail</span>
                 <input 
                   className="w-full h-14 bg-midnight/80 border border-card-border rounded-xl pl-12 pr-4 text-sm text-white focus:border-primary outline-none transition-all placeholder:text-slate-700" 
                   placeholder="name@nydev.ai" 
                   type="email" 
                 />
               </div>
             </div>
             
             <div className="space-y-2">
               <div className="flex justify-between items-center ml-1">
                 <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Password</label>
                 <a href="#" className="text-[10px] font-bold text-crimson-red hover:text-red-400 uppercase tracking-widest transition-colors">Forgot Password?</a>
               </div>
               <div className="relative group">
                 <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">lock</span>
                 <input 
                   className="w-full h-14 bg-midnight/80 border border-card-border rounded-xl pl-12 pr-4 text-sm text-white focus:border-primary outline-none transition-all placeholder:text-slate-700" 
                   placeholder="••••••••" 
                   type="password" 
                 />
               </div>
             </div>

             {/* Fix: Removed broken 'naviga' call. Using type="submit" so the form's onSubmit handles navigation. */}
             <button type="submit" className="w-full h-14 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl shadow-neon-blue transition-all uppercase tracking-widest flex items-center justify-center gap-3 group">
               Access Dashboard
               <span className="material-symbols-outlined !text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
             </button>
          </form>

          <div className="w-full pt-6 border-t border-white/5 flex flex-col items-center gap-6">
             <div className="flex items-center gap-2 text-slate-500">
               <span className="material-symbols-outlined !text-lg">verified_user</span>
               <p className="text-[10px] font-mono tracking-tighter uppercase opacity-80">End-to-end encrypted session</p>
             </div>
             <p className="text-slate-500 text-sm">
               Don't have an ID? 
               <Link to="/register" className="text-primary font-bold ml-1.5 hover:text-blue-400 transition-colors">Register</Link>
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
