const request = require('supertest');
const Server = require('./server');

describe('Server', () => {
    let server;

    beforeAll(() => {
        server = new Server();
        server.listen();
    });

    afterAll(done => {
        server.close(() => {
            done();
        });
    });

    test('should respond to GET request on /', async () => {
        const response = await request(server.app).get('/');
        expect(response.statusCode).toBe(200);
    });

    test('should calculate BMI on POST /bmi', async () => {
        const response = await request(server.app)
            .post('/bmi')
            .send({ weight: 70, height: 1.75 });
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('Your BMI is');
    });
});