import Settings from '../models/Settings.js';
import AuditLog from '../models/AuditLog.js';

export const getSettings = async (req, res, next) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) {
      settings = await Settings.create({});
    }
    res.json(settings);
  } catch (error) {
    next(error);
  }
};

export const updateSettings = async (req, res, next) => {
  try {
    const settings = await Settings.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    await AuditLog.create({
      action: 'Updated system settings',
      actor: req.user?.email || 'system',
      target: 'settings',
      metadata: {},
    });
    res.json(settings);
  } catch (error) {
    next(error);
  }
};
