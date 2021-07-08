'use strict';

const pool = require('./pool');
class DataManeger {

    read(_id)//the id save in mongodb like this _id so we don't need to search the _id:id
    {
        if (_id) {
            return pool.query('SELECT * FROM shop WHERE id=$1;', [id])
        } else {
            return pool.query('SELECT * FORM shop;');
        }
    }
    creat(obj) {
        const sql = 'INSERT INTO shop (name,role) VALUES ($1,$2) RETURNING *;';
        const saveValues = [obj.name, obj.role];
        return pool.query(sql, saveValues);
    }
    update(_id, obj) {
        const sql = 'UPDATE shop (name,role) VALUES ($1,$2) RETURNING *;';
        const saveValues = [obj.name, obj.role, id];
        return pool.query(sql, saveValues);
    }
    delete(_id) {
        return pool.query('DELETE FROM shop WHERE id=$1 RETURNING *;', [id]);
    }
}


module.exports = DataManeger;