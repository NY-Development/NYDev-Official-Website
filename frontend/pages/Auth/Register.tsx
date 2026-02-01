import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const getStrength = () => {
    if (password.length === 0) return { label: '', color: 'bg-slate-200 dark:bg-slate-800', text: 'text-slate-500', bars: 0 };
    if (password.length < 6) return { label: 'Weak', color: 'bg-red-500', text: 'text-red-500', bars: 1 };
    if (password.length < 10) return { label: 'Medium', color: 'bg-orange-500', text: 'text-orange-500', bars: 2 };
    return { label: 'Strong', color: 'bg-emerald-500', text: 'text-emerald-500', bars: 3 };
  };

  const strength = getStrength();

  return (
    <div className="min-h-screen bg-white dark:bg-[#050a15] flex flex-col lg:flex-row font-sans relative overflow-hidden transition-colors duration-300">
      
      {/* Back to Home - Adapts color based on theme */}
      <Link 
        to="/" 
        className="absolute top-8 right-8 z-30 flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-[10px] font-bold uppercase tracking-[0.2em] group"
      >
        <span className="material-symbols-outlined !text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
        Back to Home
      </Link>

      {/* LEFT PANE: Animated Branding */}
      <div className="relative w-full lg:w-5/12 min-h-[40vh] lg:min-h-screen flex flex-col justify-end p-8 lg:p-20 overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#050a15]">
        
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
            alt="Network" 
            className="w-full h-full object-cover opacity-10 dark:opacity-20 mix-blend-multiply dark:mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#050a15] via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 space-y-8 animate-[fadeIn_0.8s_ease-out]">
          <div className="size-14 rounded-2xl bg-blue-600/10 dark:bg-blue-600/20 border border-blue-600/20 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-500 shadow-xl dark:shadow-[0_0_30px_rgba(37,99,235,0.2)]">
            <span className="material-symbols-outlined !text-4xl">hub</span>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
              Build the Future <br /> with <span className="text-blue-600 dark:text-blue-500">NYDev</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-light leading-relaxed max-w-md">
              Join the premier network for futuristic software engineering. Initialize your node today.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT PANE: Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-12 bg-white dark:bg-transparent">
        <div className="w-full max-w-md space-y-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Access Node Registration</h2>
            <p className="text-slate-500 dark:text-slate-500 mt-2 text-sm">Enter your credentials to initialize your account.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/login'); }}>
            {/* Input fields adapt borders and background based on theme */}
            {[
              { label: 'Full Name', type: 'text', icon: 'person', placeholder: 'e.g. Alex Chen' },
              { label: 'Work Email', type: 'email', icon: 'mail', placeholder: 'name@company.com' }
            ].map((field) => (
              <div key={field.label} className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 dark:text-slate-400 uppercase tracking-widest ml-1">{field.label}</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">{field.icon}</span>
                  <input 
                    type={field.type}
                    className="w-full h-14 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl pl-12 pr-4 text-sm text-slate-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" 
                    placeholder={field.placeholder} 
                  />
                </div>
              </div>
            ))}

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">lock</span>
                <input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-14 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl pl-12 pr-12 text-sm text-slate-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-500 outline-none transition-all" 
                  placeholder="••••••••" 
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {showPassword ? 'visibility' : 'visibility_off'}
                </button>
              </div>

              {/* Password Strength Meter */}
              <div className="pt-2 flex flex-col gap-2">
                <div className="h-1 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden flex gap-1">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`h-full flex-1 transition-all duration-500 ${strength.bars >= i ? strength.color : 'bg-transparent'}`} />
                  ))}
                </div>
                <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest">
                  <span className="text-slate-400">Security Level</span>
                  <span className={strength.text}>{strength.label}</span>
                </div>
              </div>
            </div>

            <button className="w-full h-14 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg dark:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all uppercase tracking-widest flex items-center justify-center gap-3">
              Create Account
            </button>
          </form>

          {/* Social Auth adaptively styled */}
          <div className="space-y-6">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-full h-px bg-slate-200 dark:bg-white/5" />
              <span className="relative px-4 bg-white dark:bg-[#050a15] text-[10px] font-bold text-slate-400 uppercase tracking-widest">Or connect via</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['GitHub', 'Google'].map(platform => (
                <button key={platform} className="h-12 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-100 dark:hover:bg-white/10 transition-all">
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;