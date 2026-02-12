import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import api from '../../services/api';

const VerifyOtpPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState((location.state as { email?: string } | null)?.email || '');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    try {
      const { data } = await api.post('/api/auth/verify-otp', { email, otp });
      setMessage(data.message || 'OTP verified. You can now login.');
      navigate('/login');
    } catch (err) {
      setError('Verification failed. Please check your OTP.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1623] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md glass-card rounded-2xl p-8">
        <h1 className="text-xl font-bold mb-2">Verify OTP</h1>
        <p className="text-xs text-slate-400 mb-6">Enter the one-time code sent to your email.</p>
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
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">OTP Code</label>
            <input
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm tracking-[0.3em]"
              value={otp}
              onChange={(event) => setOtp(event.target.value)}
              type="text"
              placeholder="123456"
              required
            />
          </div>
          {message && <p className="text-xs text-emerald-400">{message}</p>}
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button className="btn-primary w-full py-3 cursor-pointer" type="submit">
            Verify OTP
          </button>
        </form>
        <div className="mt-6 flex justify-between text-xs text-slate-400">
          <Link className="text-primary hover:underline" to="/login">
            Back to login
          </Link>
          <Link className="text-primary hover:underline" to="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
