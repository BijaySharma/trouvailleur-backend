import express from 'express';
import {getStates} from '../controllers/statesController.js';

const router = express.Router();
router.route('/')
    .get(getStates);

export default router;