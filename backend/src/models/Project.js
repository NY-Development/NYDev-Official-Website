import mongoose from 'mongoose';

const assetSchema = new mongoose.Schema({
  url: { type: String, required: true },
  type: { type: String, enum: ['image', 'video'], default: 'image' },
}, { _id: false });

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, default: '' },
  image: { type: String, default: '' },
  link: { type: String, default: '' },
  techTags: [{ type: String }],
  category: [{ type: String }],
  isDone: { type: String, enum: ['pending', 'testing', 'done'], default: 'pending' },
  name: { type: String, default: '' },
  slug: { type: String, default: '', unique: true, sparse: true },
  description: { type: String, default: '' },
  client: { type: String, default: '' },
  technologies: [{ type: String }],
  status: { type: String, enum: ['draft', 'published', 'archived'], default: 'published' },
  assets: [assetSchema],
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
export default Project;
