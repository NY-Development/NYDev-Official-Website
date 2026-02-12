import mongoose from 'mongoose';

const socialSchema = new mongoose.Schema({
  github: String,
  linkedin: String,
  twitter: String,
}, { _id: false });

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, default: '' },
  role: { type: String, default: '' },
  bio: { type: String, default: '' },
  department: { type: String, default: '' },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  avatarUrl: { type: String, default: '' },
  tags: [{ type: String }],
  socials: socialSchema,
}, { timestamps: true });

const Team = mongoose.model('Team', teamSchema);
export default Team;
