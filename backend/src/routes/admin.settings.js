import express from 'express';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';
import { getSettings, updateSettings } from '../controllers/settingsController.js';

const router = express.Router();

router.use(auth, adminOnly);

router.get('/', getSettings);
router.put('/', updateSettings);

export default router;
