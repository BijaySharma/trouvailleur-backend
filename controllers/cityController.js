import asyncHandler from 'express-async-handler';
import City from '../models/cityModel.js';

const getCities = asyncHandler( async (req, res) => {
    const cities = await City.find();
    res.json(cities);
});

const createCity = asyncHandler( async (req, res) =>{
    const {name, description, images, featured} = req.body;
    const city = new City({
        name, description, images, featured
    });

    const createdCity = await city.save();
    res.status(201).json(createdCity);
});

export { getCities, createCity };