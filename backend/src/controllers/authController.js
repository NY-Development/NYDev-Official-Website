import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import User from '../models/User.js';
import { sendOtpEmail, sendResetEmail } from '../utils/mailer.js';

const signToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '2h' });
};

const OTP_TTL_MINUTES = 10;
const RESET_TTL_MINUTES = 30;

const generateOtp = () => `${Math.floor(100000 + Math.random() * 900000)}`;

const hashToken = (token) => crypto.createHash('sha256').update(token).digest('hex');

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already in use' });

    const hashed = await bcrypt.hash(password, 12);
    const otpCode = generateOtp();
    const otpExpiresAt = new Date(Date.now() + OTP_TTL_MINUTES * 60 * 1000);

    await User.create({
      name,
      email,
      password: hashed,
      role: 'admin',
      isVerified: false,
      otpCode,
      otpExpiresAt,
    });

    await sendOtpEmail({ to: email, otp: otpCode });

    const payload = { message: 'Registration successful. Verify OTP to continue.' };
    if (process.env.NODE_ENV !== 'production') {
      payload.otp = otpCode;
    }

    res.status(201).json(payload);
  } catch (error) {
    next(error);
  }
};

export const verifyOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    if (user.isVerified) return res.status(400).json({ message: 'User already verified' });
    if (!user.otpCode || !user.otpExpiresAt) return res.status(400).json({ message: 'OTP not requested' });
    if (user.otpExpiresAt < new Date()) return res.status(400).json({ message: 'OTP expired' });
    if (user.otpCode !== otp) return res.status(401).json({ message: 'Invalid OTP' });

    user.isVerified = true;
    user.otpCode = undefined;
    user.otpExpiresAt = undefined;
    await user.save();

    res.json({ message: 'OTP verified. You can now login.' });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    if (!user.isVerified) return res.status(403).json({ message: 'Verify OTP before login' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    const token = signToken(user._id);
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    next(error);
  }
};

export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const rawToken = crypto.randomBytes(32).toString('hex');
      user.resetTokenHash = hashToken(rawToken);
      user.resetExpiresAt = new Date(Date.now() + RESET_TTL_MINUTES * 60 * 1000);
      await user.save();

      await sendResetEmail({ to: email, token: rawToken });

      const payload = { message: 'Password reset instructions sent.' };
      if (process.env.NODE_ENV !== 'production') {
        payload.resetToken = rawToken;
      }
      return res.json(payload);
    }

    return res.json({ message: 'Password reset instructions sent.' });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    const { token, password } = req.body;
    const hashedToken = hashToken(token);
    const user = await User.findOne({
      resetTokenHash: hashedToken,
      resetExpiresAt: { $gt: new Date() },
    });
    if (!user) return res.status(400).json({ message: 'Invalid or expired token' });

    user.password = await bcrypt.hash(password, 12);
    user.resetTokenHash = undefined;
    user.resetExpiresAt = undefined;
    await user.save();

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    next(error);
  }
};

export const refresh = async (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
};

export const logout = async (req, res) => {
  res.json({ message: 'Logged out' });
};
