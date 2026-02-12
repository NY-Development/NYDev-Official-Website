import Project from '../models/Project.js';
import AuditLog from '../models/AuditLog.js';

const logAction = async (req, action, target, metadata = {}) => {
  await AuditLog.create({
    action,
    actor: req.user?.email || 'system',
    target,
    metadata,
  });
};

export const createProject = async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    await logAction(req, 'Created project', project.name, { projectId: project._id.toString() });
    res.status(201).json({
      id: project._id,
      ...project.toObject(),
    });
  } catch (error) {
    next(error);
  }
};

export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects.map((project) => ({ id: project._id, ...project.toObject() })));
  } catch (error) {
    next(error);
  }
};

export const getProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json({ id: project._id, ...project.toObject() });
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    await logAction(req, 'Updated project', project.name, { projectId: project._id.toString() });
    res.json({ id: project._id, ...project.toObject() });
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    await logAction(req, 'Deleted project', project.name, { projectId: project._id.toString() });
    res.json({ message: 'Project removed' });
  } catch (error) {
    next(error);
  }
};

export const updateProjectStatus = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!project) return res.status(404).json({ message: 'Project not found' });
    await logAction(req, 'Updated project status', project.name, { status: project.status });
    res.json({ id: project._id, ...project.toObject() });
  } catch (error) {
    next(error);
  }
};
