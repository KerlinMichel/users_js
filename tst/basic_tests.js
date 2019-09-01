const chai = require('chai');
const chaiHTTP = require('chai-http');
const app = require('../src/app').app;

chai.use(chaiHTTP);
chai.should();

describe('API basic tests', () => {
    describe('root endpoint', () => {
        it('should successfully hit the root endpoint', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});