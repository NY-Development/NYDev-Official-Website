import express from 'express';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';
import { getUsers, updateUserRole } from '../controllers/adminUserController.js';

const router = express.Router();

router.use(auth, adminOnly);

router.get('/', getUsers);
router.patch('/:id/role', updateUserRole);

export default router;
