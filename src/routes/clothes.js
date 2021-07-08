'use stict';
const express = require('express');
const DataManeger = require('../models/data-collectin-class');
const ClothesModel = require('../models/clothes');


const newData = new DataManeger(ClothesModel);//we didn't interacte directly with mongooes .for example we use .creat() to invoke .save()

const route = express.Router();


// route.get('/', getclothes);
route.get('/:id', getclothesById);
route.post('/', creatclothes);
route.put('/:id', updateclothes);
route.delete('/:id', deleteclothes);

// async function getclothes(req, res, next) {
//     try {

//         const obj = await newData.read();
//         console.log('get', obj);
//         res.json({ obj });
//         console.log(res.json({ obj }));
//     } catch (err) {
//         next(err);
//     }
// }

async function getclothesById(req, res, next) {
    try {
        const id = req.params.id;
        const obj = await newData.read(id);
        res.json({ obj: obj.rows })
    } catch (err) {
        next(err);
    }
}

async function creatclothes(req, res, next) {
    try {
        const data = req.body;
        const newobj = await newData.creat(data);
        console.log(newobj);
        res.json(newobj.rows[0]);
    } catch (err) {
        next(err);
    }
}


async function updateclothes(req, res, next) {
    try {
        const id = req.params.id;
        const data = req.body;
        const newobj = await newData.update(id, data);
        res.json(newobj.rows[0]);
    } catch (err) {
        next(err);
    }
}

async function deleteclothes(req, res, next) {
    try {
        const deleteobj = await newData.delete(req.params.id);
        res.json(deleteobj.rows[0]);
    } catch (err) {
        next(err);
    }
}


module.exports = route;