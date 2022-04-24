import asyncHandler from 'express-async-handler';
import State from '../models/stateModel.js';

const getStates = asyncHandler(async (req, res) => {
    const states = await State.find();
    res.json(states);
});

export { getStates };
