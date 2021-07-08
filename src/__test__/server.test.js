'use strict';

const supergoose = require('@code-fellows/supergoose');
const server = require('../server');
const mockReq = supergoose(server.server);

let id;
let data;

describe('Creat a record using post ', () => {
    it(('res with correct status'), async () => {
        const testData = { name: 'Ayah' };
        const response = await mockReq.post('/api/vi/food').send(testData);
        console.log('res post', response.body);
        expect(response.status).toBe(201);

    })
    it(('res with correct status'), async () => {
        const testData = { name: 'Ayah', number: '123' };
        const testObj = { name: 'Ayah' };

        const response = await mockReq.post('/api/vi/food').send(testData);
        expect(response.status).toBe(201);
        // console.log('id from post', response.body._id);
        expect(response.body.name).toBe(testData.name);
        expect(response.body.number).toBe(testData.number);
        expect(response.body).toMatchObject(testObj);


    })

})

xdescribe('Read a list of record ', () => {
    it(('res with correct status'), async () => {
        const response = await mockReq.get('/api/vi/food');
        expect(response.status).toBe(200);
        // console.log('id from post', response.body);

    })
    it(('Read a list of record'), async () => {
        const testData = { name: 'Ayah', number: '123' };
        await mockReq.post('/api/vi/food').send(testData);
        const response = await mockReq.get('/api/vi/food');

        id = response.body[0]._id;
        // console.log('id for get', id);


        data = response.body;
        expect(response.status).toBe(200);
        // console.log('body.obj', response.body);
        // expect(response.body.obj[0].name).toEqual('Ayah');
        expect(response.body[0].number).toBe('123');

    })

    it((' Update record by put'), async () => {
        // const testData = { name: 'Ayah', number: '123' };
        // await mockReq.post('/api/vi/food').send(testData);
        console.log('before update response.body', data);

        const updateData = { name: 'ali', number: '456' };
        const response = await mockReq.put(`/api/vi/food/${id}`).send(updateData);
        // console.log('respons', response.body);

        expect(response.status).toBe(201);
        console.log('after update response.body', response.body);
        expect(response.body.name).toEqual('ali');
        // expect(response.body[0].number).toBe('123');

    })
    it(('delete data'), async () => {
        const response = await mockReq.delete(`/api/vi/food/${id}`);
        expect(response.status).toBe(200);
        // console.log('id from post', response.body);

    })


})
