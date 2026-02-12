import mongoose from 'mongoose';

const assetSchema = new mongoose.Schema({
  url: { type: String, required: true },
  type: { type: String, enum: ['image', 'video'], default: 'image' },
}, { _id: false });

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, default: '' },
  client: { type: String, default: '' },
  technologies: [{ type: String }],
  status: { type: String, enum: ['draft', 'published', 'archived'], default: 'draft' },
  assets: [assetSchema],
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
export default Project;
