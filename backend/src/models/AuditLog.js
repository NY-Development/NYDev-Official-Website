import mongoose from 'mongoose';

const auditLogSchema = new mongoose.Schema({
  action: { type: String, required: true },
  actor: { type: String, required: true },
  target: { type: String, required: true },
  metadata: { type: Object, default: {} },
}, { timestamps: true });

const AuditLog = mongoose.model('AuditLog', auditLogSchema);
export default AuditLog;
