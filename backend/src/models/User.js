import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  isVerified: { type: Boolean, default: false },
  otpCode: { type: String },
  otpExpiresAt: { type: Date },
  resetTokenHash: { type: String },
  resetExpiresAt: { type: Date },
  refreshTokens: [{ token: String, createdAt: { type: Date, default: Date.now } }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
