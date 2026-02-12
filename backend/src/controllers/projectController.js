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

const toSlug = (value = '') => value
  .toString()
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)+/g, '');

const normalizeIsDone = (value) => {
  if (value === true) return 'done';
  if (value === false) return 'pending';
  if (value === 'testing') return 'testing';
  if (value === 'done' || value === 'pending') return value;
  return 'pending';
};

const normalizeProjectPayload = (payload = {}) => {
  const title = payload.title || payload.name || '';
  const desc = payload.desc || payload.description || '';
  const techTags = payload.techTags || payload.technologies || [];
  const category = payload.category || [];
  const image = payload.image || payload.assets?.[0]?.url || '';
  const link = payload.link || '';
  const slug = payload.slug || (title ? toSlug(title) : undefined);
  const isDone = normalizeIsDone(payload.isDone);
  const status = payload.status || 'published';

  return {
    ...payload,
    title,
    desc,
    image,
    link,
    techTags,
    category,
    isDone,
    name: payload.name || title,
    description: payload.description || desc,
    technologies: payload.technologies || techTags,
    slug,
    status,
  };
};

const toProjectResponse = (project) => {
  const data = project.toObject();
  const techTags = data.techTags?.length ? data.techTags : data.technologies || [];

  return {
    id: project._id,
    ...data,
    title: data.title || data.name || '',
    desc: data.desc || data.description || '',
    image: data.image || data.assets?.[0]?.url || '',
    link: data.link || '',
    techTags,
    category: data.category || [],
    isDone: data.isDone || (data.status === 'published' ? 'done' : 'pending'),
  };
};

export const createProject = async (req, res, next) => {
  try {
    const project = await Project.create(normalizeProjectPayload(req.body));
    await logAction(req, 'Created project', project.name, { projectId: project._id.toString() });
    res.status(201).json(toProjectResponse(project));
  } catch (error) {
    next(error);
  }
};

export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects.map((project) => toProjectResponse(project)));
  } catch (error) {
    next(error);
  }
};

export const getProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(toProjectResponse(project));
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      normalizeProjectPayload(req.body),
      { new: true }
    );
    if (!project) return res.status(404).json({ message: 'Project not found' });
    await logAction(req, 'Updated project', project.name, { projectId: project._id.toString() });
    res.json(toProjectResponse(project));
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
    res.json(toProjectResponse(project));
  } catch (error) {
    next(error);
  }
};
