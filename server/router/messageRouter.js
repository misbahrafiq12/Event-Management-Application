import express from 'express';
const router = express.Router();
import { message } from '../controllers/messageController.js';

router.post('/send', message);

export default router;
