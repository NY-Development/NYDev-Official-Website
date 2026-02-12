import express from 'express';
import Content from '../models/Content.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const blocks = await Content.find({ status: 'synced' });
    res.json(blocks.map((block) => ({ id: block._id, ...block.toObject() })));
  } catch (error) {
    next(error);
  }
});

export default router;
