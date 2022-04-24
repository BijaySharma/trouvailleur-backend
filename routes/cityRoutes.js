import express from "express";
import { createCity, getCities } from '../controllers/cityController.js';

const router = express.Router();

router.route('/')
    .get(getCities)
    .post(createCity);

export default router;