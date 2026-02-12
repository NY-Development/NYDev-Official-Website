import Team from '../models/Team.js';
import AuditLog from '../models/AuditLog.js';

const logAction = async (req, action, target, metadata = {}) => {
  await AuditLog.create({
    action,
    actor: req.user?.email || 'system',
    target,
    metadata,
  });
};

export const createTeamMember = async (req, res, next) => {
  try {
    const member = await Team.create(req.body);
    await logAction(req, 'Created team member', member.name, { memberId: member._id.toString() });
    res.status(201).json({ id: member._id, ...member.toObject() });
  } catch (error) {
    next(error);
  }
};

export const getTeam = async (req, res, next) => {
  try {
    const members = await Team.find().sort({ createdAt: -1 });
    res.json(members.map((member) => ({ id: member._id, ...member.toObject() })));
  } catch (error) {
    next(error);
  }
};

export const updateTeamMember = async (req, res, next) => {
  try {
    const member = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!member) return res.status(404).json({ message: 'Team member not found' });
    await logAction(req, 'Updated team member', member.name, { memberId: member._id.toString() });
    res.json({ id: member._id, ...member.toObject() });
  } catch (error) {
    next(error);
  }
};

export const deleteTeamMember = async (req, res, next) => {
  try {
    const member = await Team.findByIdAndDelete(req.params.id);
    if (!member) return res.status(404).json({ message: 'Team member not found' });
    await logAction(req, 'Deleted team member', member.name, { memberId: member._id.toString() });
    res.json({ message: 'Team member removed' });
  } catch (error) {
    next(error);
  }
};

export const updateTeamStatus = async (req, res, next) => {
  try {
    const member = await Team.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!member) return res.status(404).json({ message: 'Team member not found' });
    await logAction(req, 'Updated team member status', member.name, { status: member.status });
    res.json({ id: member._id, ...member.toObject() });
  } catch (error) {
    next(error);
  }
};
