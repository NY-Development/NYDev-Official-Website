import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  value: { type: String, default: '' },
  status: { type: String, enum: ['synced', 'draft'], default: 'synced' },
  updatedBy: { type: String, default: 'system' },
}, { timestamps: true });

const Content = mongoose.model('Content', contentSchema);
export default Content;
