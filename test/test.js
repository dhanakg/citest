 
var myApp = require('../index.js');
var request = require('supertest')(myApp);

describe('my api', function() {
    it('returns hello world', function(done) {
        request
            .get('/')
            .expect('hello world', done);
    });
});