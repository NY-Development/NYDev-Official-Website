import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login(email, password);
      navigate('/admin');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1623] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md glass-card rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-icons text-white text-sm">terminal</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">NYDev Admin</h1>
            <p className="text-xs text-slate-400 uppercase tracking-[0.3em]">Secure Access</p>
          </div>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email</label>
            <input
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="admin@nydev.io"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Password</label>
            <div className="relative">
              <input
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pr-12 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                <span className="material-icons text-base">{showPassword ? 'visibility_off' : 'visibility'}</span>
              </button>
            </div>
          </div>
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button className="btn-primary w-full py-3 cursor-pointer" type="submit">
            Sign In
          </button>
          <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
            <Link className="text-primary hover:underline" to="/forgot-password">
            Forgot password?
            </Link>
            <Link className="text-primary hover:underline" to="/signup">
            Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
