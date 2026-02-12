import express from 'express';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/adminOnly.js';
import upload from '../middleware/upload.js';
import { uploadAsset } from '../controllers/uploadController.js';

const router = express.Router();

router.use(auth, adminOnly);

router.post('/', upload.single('file'), uploadAsset);

export default router;
