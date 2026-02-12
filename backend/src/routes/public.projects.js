import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.find({ status: 'published' }).sort({ createdAt: -1 });
    res.json(projects.map((project) => {
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
    }));
  } catch (error) {
    next(error);
  }
});

export default router;
