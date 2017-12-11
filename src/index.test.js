var expect = require('chai').expect;
var index = require('./index');

describe('jst', function(){
    describe('isNode', function(){
        it('should be true if usage is inside node.js', function(){
            expect(index.isNode()).to.be.true;
        });
    });
});