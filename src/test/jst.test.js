var rewire = require('rewire');
var expect = require('chai').expect;
var jst = rewire('../../dist/jst.js');

test = jst.__get__('JST.test');
isNode = jst.__get__('JST.isNode');

describe('jst', function(){

    describe('test', function(){
        it('should be a function', function(){
            expect(test).to.be.a('Function');
        });
    });

    describe('isNode', function(){
        it('should be true if executed in node.js environment, otherwise false', function(){

            if(typeof global.it === 'function')
                expect(isNode()).to.be.true;
            else
                expect(isNode()).to.be.false;
        });
    });
});