
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-midnight flex flex-col lg:flex-row font-display relative overflow-hidden">
      {/* Back to Home Button */}
      <Link 
        to="/" 
        className="absolute top-10 right-10 z-20 flex items-center gap-2 text-slate-400 hover:text-white transition-all text-xs font-bold uppercase tracking-widest group"
      >
        <span className="material-symbols-outlined !text-lg">home</span>
        Back to Home
      </Link>

      {/* Left Pane */}
      <div className="relative w-full lg:w-5/12 h-64 lg:h-auto bg-navy flex flex-col justify-end p-12 xl:p-20 overflow-hidden">
         <div className="absolute inset-0 bg-[url(https://picsum.photos/id/180/1000/1000)] bg-cover bg-center opacity-20 mix-blend-overlay" />
         <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-primary/20 z-0" />
         
         <div className="relative z-10 space-y-8">
            <div className="size-12 rounded-xl bg-primary/20 backdrop-blur-md flex items-center justify-center text-primary border border-primary/30">
               <span className="material-symbols-outlined !text-3xl">hub</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl xl:text-6xl font-bold leading-tight tracking-tight text-white">
                Build the Future <br /> with <span className="text-primary">NYDev</span>
              </h1>
              <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md">
                Join the premier network for futuristic software engineering. Initialize your node and start building today.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="size-10 rounded-full border-2 border-midnight bg-cover bg-center" style={{ backgroundImage: `url(https://picsum.photos/id/${i+50}/100/100)` }} />
                ))}
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">+2,400 engineers joined this week</p>
            </div>
         </div>
      </div>

      {/* Right Pane */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
         <div className="w-full max-w-md space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">Access Node Registration</h2>
              <p className="text-slate-500 mt-2">Enter your credentials to initialize your account dashboard.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/login'); }}>
               <div className="space-y-2">
                 <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                 <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">person</span>
                    <input className="w-full h-14 bg-navy/50 border border-card-border rounded-xl pl-12 pr-4 text-sm text-white focus:border-primary outline-none transition-all placeholder:text-slate-700" placeholder="e.g. Alex Chen" />
                 </div>
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                 <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">mail</span>
                    <input className="w-full h-14 bg-navy/50 border border-card-border rounded-xl pl-12 pr-4 text-sm text-white focus:border-primary outline-none transition-all placeholder:text-slate-700" placeholder="name@company.com" />
                 </div>
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
                 <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">lock</span>
                    <input className="w-full h-14 bg-navy/50 border border-card-border rounded-xl pl-12 pr-12 text-sm text-white focus:border-primary outline-none transition-all" type="password" placeholder="••••••••" />
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 cursor-pointer">visibility_off</span>
                 </div>
                 <div className="pt-2 flex flex-col gap-2">
                    <div className="h-1 w-full bg-midnight rounded-full overflow-hidden flex">
                       <div className="h-full bg-crimson-red w-1/4" />
                       <div className="h-full bg-orange-500 w-1/4" />
                    </div>
                    <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest">
                       <span className="text-slate-500">Password Strength</span>
                       <span className="text-orange-500">Medium</span>
                    </div>
                 </div>
               </div>

               <label className="flex items-start gap-4 cursor-pointer pt-4">
                  <div className="size-5 rounded bg-navy border border-card-border mt-0.5 flex items-center justify-center">
                    <div className="size-2 rounded-sm bg-primary" />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                  </p>
               </label>

               <button className="w-full h-14 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl shadow-neon-blue transition-all uppercase tracking-widest flex items-center justify-center gap-3 group">
                 Create Account
                 <span className="material-symbols-outlined !text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
               </button>
            </form>

            <div className="relative flex items-center justify-center py-4">
               <div className="absolute w-full h-px bg-card-border" />
               <span className="relative px-4 bg-midnight text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">Or connect via</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <button className="h-12 rounded-xl bg-navy border border-card-border text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:border-slate-500 transition-all">
                  GitHub
               </button>
               <button className="h-12 rounded-xl bg-navy border border-card-border text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:border-slate-500 transition-all">
                  Google
               </button>
            </div>

            <p className="text-center text-sm text-slate-500">
               Already have an ID? 
               <Link to="/login" className="text-primary font-bold ml-1.5 hover:text-blue-400 transition-colors">Log In</Link>
            </p>
         </div>
      </div>
    </div>
  );
};

export default Register;
