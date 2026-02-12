import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    try {
      const { data } = await api.post('/api/auth/forgot-password', { email });
      setMessage(data.message || 'Check your email for reset instructions.');
    } catch (err) {
      setError('Unable to process request.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1623] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md glass-card rounded-2xl p-8">
        <h1 className="text-xl font-bold mb-2">Forgot Password</h1>
        <p className="text-xs text-slate-400 mb-6">We will send a reset token to your email.</p>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email</label>
            <input
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              required
            />
          </div>
          {message && <p className="text-xs text-emerald-400">{message}</p>}
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button className="btn-primary w-full py-3 cursor-pointer" type="submit">
            Send Reset Token
          </button>
        </form>
        <div className="mt-6 flex justify-between text-xs text-slate-400">
          <Link className="text-primary hover:underline" to="/login">
            Back to login
          </Link>
          <Link className="text-primary hover:underline" to="/reset-password">
            Already have token
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
