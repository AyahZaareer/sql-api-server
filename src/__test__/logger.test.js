'use strict';
const loggerMiddelware = require('../middleware/logger');
const server = require('../server');
const supertest = require('supertest');
const mockReq = supertest(server.app);

xdescribe('logger middelware', () => {
    let consolSpy;
    const req = {};
    const res = {};
    const next = jest.fn();

    beforeEach(() => {

        consolSpy = jest.spyOn(console, 'log').mockImplementation();
    });
    afterEach(() => {
        consolSpy.mockRestore();
    });
    it('logs output correctly', () => {
        loggerMiddelware(req, res, next);
        expect(consolSpy).toHaveBeenCalled();
    });
    it('moves to the next middleware', () => {
        loggerMiddelware(req, res, next);
        expect(next).toHaveBeenCalledWith();
    })
})