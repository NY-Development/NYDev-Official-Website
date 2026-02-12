import express from 'express';
import Team from '../models/Team.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const team = await Team.find({ status: 'active' }).sort({ createdAt: -1 });
    res.json(team.map((member) => {
      const data = member.toObject();
      return {
        id: member._id,
        ...data,
        role: data.role || data.title || '',
        desc: data.desc || data.bio || '',
        image: data.image || data.avatarUrl || '',
        links: data.links || data.socials || {},
      };
    }));
  } catch (error) {
    next(error);
  }
});

export default router;
