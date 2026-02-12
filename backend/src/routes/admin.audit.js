import express from 'express';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';
import { getAuditLogs } from '../controllers/adminUserController.js';

const router = express.Router();

router.use(auth, adminOnly);

router.get('/', getAuditLogs);

export default router;
