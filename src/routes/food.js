'use stict';
const express = require('express');
const DataManeger = require('../models/data-collectin-class');
const FoodModel = require('../models/food');


const foodData = new DataManeger(FoodModel);//we didn't interacte directly with mongooes .for example we use .creat() to invoke .save()

const route = express.Router();


// route.get('/', getFood);
route.get('/:id', getFoodById);
route.post('/', creatFood);
route.put('/:id', updateFood);
route.delete('/:id', deleteFood);

// async function getFood(req, res, next) {
//     try {
//         const obj = await foodData.read();
//         res.json(obj);
//     } catch (err) {
//         next(err);
//     }
// }

async function getFoodById(req, res, next) {
    try {
        const obj = await foodData.read(req.params.id);
        res.json({ obj: obj.rows });
    } catch (err) {
        next(err);
    }
}

async function creatFood(req, res, next) {
    try {
        const food = req.body;
        const obj = await foodData.creat(food);
        res.json(obj.rows[0]);
    } catch (err) {
        next(err);
    }
}


async function updateFood(req, res, next) {
    try {
        const food = req.body;
        const obj = await foodData.update(req.params.id, food);
        res.json(obj.rows[0]);
    } catch (err) {
        next(err);
    }
}

async function deleteFood(req, res, next) {
    try {
        const obj = await foodData.delete(req.params.id);
        res.json(obj.rows[0]);
    } catch (err) {
        next(err);
    }
}


module.exports = route;

