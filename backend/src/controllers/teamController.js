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

const normalizeTeamPayload = (payload = {}) => {
  const image = payload.image || payload.avatarUrl || '';
  const desc = payload.desc || payload.bio || '';
  const links = payload.links || payload.socials || {};

  return {
    ...payload,
    image,
    desc,
    links,
    avatarUrl: payload.avatarUrl || image,
    bio: payload.bio || desc,
    socials: payload.socials || links,
  };
};

const toTeamResponse = (member) => {
  const data = member.toObject();
  return {
    id: member._id,
    ...data,
    role: data.role || data.title || '',
    desc: data.desc || data.bio || '',
    image: data.image || data.avatarUrl || '',
    links: data.links || data.socials || {},
  };
};

export const createTeamMember = async (req, res, next) => {
  try {
    const member = await Team.create(normalizeTeamPayload(req.body));
    await logAction(req, 'Created team member', member.name, { memberId: member._id.toString() });
    res.status(201).json(toTeamResponse(member));
  } catch (error) {
    next(error);
  }
};

export const getTeam = async (req, res, next) => {
  try {
    const members = await Team.find().sort({ createdAt: -1 });
    res.json(members.map((member) => toTeamResponse(member)));
  } catch (error) {
    next(error);
  }
};

export const updateTeamMember = async (req, res, next) => {
  try {
    const member = await Team.findByIdAndUpdate(
      req.params.id,
      normalizeTeamPayload(req.body),
      { new: true }
    );
    if (!member) return res.status(404).json({ message: 'Team member not found' });
    await logAction(req, 'Updated team member', member.name, { memberId: member._id.toString() });
    res.json(toTeamResponse(member));
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
    res.json(toTeamResponse(member));
  } catch (error) {
    next(error);
  }
};
