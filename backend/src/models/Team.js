import mongoose from 'mongoose';

const socialSchema = new mongoose.Schema({
  github: String,
  linkedin: String,
  twitter: String,
  x: String,
  instagram: String,
  telegram: String,
  website: String,
  youtube: String,
  leetcode: String,
}, { _id: false });

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: '' },
  desc: { type: String, default: '' },
  image: { type: String, default: '' },
  links: socialSchema,
  title: { type: String, default: '' },
  bio: { type: String, default: '' },
  department: { type: String, default: '' },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  avatarUrl: { type: String, default: '' },
  tags: [{ type: String }],
  socials: socialSchema,
}, { timestamps: true });

const Team = mongoose.model('Team', teamSchema);
export default Team;
