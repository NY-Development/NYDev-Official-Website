import express from 'express';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';
import { getContent, getContentByKey, updateContentByKey } from '../controllers/contentController.js';

const router = express.Router();

router.use(auth, adminOnly);

router.get('/', getContent);
router.get('/:key', getContentByKey);
router.put('/:key', updateContentByKey);

export default router;
