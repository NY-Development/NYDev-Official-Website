import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
  siteName: { type: String, default: 'NYDev Cloud Infrastructure' },
  supportEmail: { type: String, default: 'ops@nydev.io' },
  environment: { type: String, enum: ['production', 'staging', 'development'], default: 'production' },
  timezone: { type: String, default: '(GMT-05:00) Eastern Time' },
  apiKeys: {
    stripeSecretKey: { type: String, default: '' },
    awsAccessKey: { type: String, default: '' },
  },
  features: {
    maintenanceMode: { type: Boolean, default: false },
    debugLogging: { type: Boolean, default: false },
  },
}, { timestamps: true });

const Settings = mongoose.model('Settings', settingsSchema);
export default Settings;
