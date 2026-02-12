import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.find({ status: 'published' }).sort({ createdAt: -1 });
    res.json(projects.map((project) => ({ id: project._id, ...project.toObject() })));
  } catch (error) {
    next(error);
  }
});

export default router;
