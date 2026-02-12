import User from '../models/User.js';
import AuditLog from '../models/AuditLog.js';

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(
      users.map((user) => ({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: 'active',
        lastActiveAt: user.updatedAt,
      }))
    );
  } catch (error) {
    next(error);
  }
};

export const updateUserRole = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role: req.body.role },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });
    await AuditLog.create({
      action: `Changed role to ${req.body.role}`,
      actor: req.user?.email || 'system',
      target: user.email,
      metadata: { userId: user._id.toString() },
    });
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: 'active',
      lastActiveAt: user.updatedAt,
    });
  } catch (error) {
    next(error);
  }
};

export const getAuditLogs = async (req, res, next) => {
  try {
    const logs = await AuditLog.find().sort({ createdAt: -1 }).limit(50);
    res.json(
      logs.map((log) => ({
        id: log._id,
        action: log.action,
        actor: log.actor,
        target: log.target,
        createdAt: log.createdAt,
        metadata: log.metadata,
      }))
    );
  } catch (error) {
    next(error);
  }
};
