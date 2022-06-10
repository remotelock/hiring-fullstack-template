const server = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('Device Endpoints', () => {
    it('should return response', async () => {
        const lock = {
            "name": "Garage door",
            "power_source": "alkaline_battery",
            "connected_at": "2019-04-10T08:02:36Z",
            "firmware_version": "5.01.181217.1",
            "serial_number": "AC000W001335336",
            "programming_code": "2806",
            "state": "locked",
            "model_number": "BG (LS-3i)"
        };
        const resPost = await requestWithSupertest.post('/device').send(lock);
        expect(resPost.status).toEqual(200);
        {
            // lower case
            const getRes = await requestWithSupertest.get('/device').query({ "name": "garage" })
            expect(getRes.body[0].name).toEqual(lock.name);
        }

        {
            // title case
            const getRes = await requestWithSupertest.get('/device').query({ "name": "Garage Door" })
            expect(getRes.body[0].name).toEqual(lock.name);
        }
    });

});