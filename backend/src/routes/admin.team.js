import express from 'express';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';
import {
  createTeamMember,
  getTeam,
  updateTeamMember,
  deleteTeamMember,
  updateTeamStatus,
} from '../controllers/teamController.js';

const router = express.Router();

router.use(auth, adminOnly);

router.post('/', createTeamMember);
router.get('/', getTeam);
router.put('/:id', updateTeamMember);
router.delete('/:id', deleteTeamMember);
router.patch('/:id/status', updateTeamStatus);

export default router;
