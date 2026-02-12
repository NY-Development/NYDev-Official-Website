import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';

const ResetPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    try {
      const { data } = await api.post('/api/auth/reset-password', { token, password });
      setMessage(data.message || 'Password reset successful.');
      navigate('/login');
    } catch (err) {
      setError('Reset failed. Check your token and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1623] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md glass-card rounded-2xl p-8">
        <h1 className="text-xl font-bold mb-2">Reset Password</h1>
        <p className="text-xs text-slate-400 mb-6">Enter the reset token and a new password.</p>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Reset Token</label>
            <input
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm"
              value={token}
              onChange={(event) => setToken(event.target.value)}
              type="text"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">New Password</label>
            <div className="relative">
              <input
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pr-12 text-sm"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type={showPassword ? 'text' : 'password'}
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
          {message && <p className="text-xs text-emerald-400">{message}</p>}
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button className="btn-primary w-full py-3 cursor-pointer" type="submit">
            Reset Password
          </button>
        </form>
        <div className="mt-6 flex justify-between text-xs text-slate-400">
          <Link className="text-primary hover:underline" to="/login">
            Back to login
          </Link>
          <Link className="text-primary hover:underline" to="/forgot-password">
            Need a token
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
