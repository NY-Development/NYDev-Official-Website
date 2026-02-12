import express from 'express';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';
import {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
  updateProjectStatus,
} from '../controllers/projectController.js';

const router = express.Router();

router.use(auth, adminOnly);

router.post('/', createProject);
router.get('/', getProjects);
router.get('/:id', getProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);
router.patch('/:id/status', updateProjectStatus);

export default router;
