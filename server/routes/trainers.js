import express from 'express';
import { getTrainers } from '../controllers/trainers.js';

const router = express.Router();

router.get('/', getTrainers);

export default router;