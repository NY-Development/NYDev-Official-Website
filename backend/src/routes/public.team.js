import express from 'express';
import Team from '../models/Team.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const team = await Team.find({ status: 'active' }).sort({ createdAt: -1 });
    res.json(team.map((member) => ({ id: member._id, ...member.toObject() })));
  } catch (error) {
    next(error);
  }
});

export default router;
