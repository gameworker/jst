var rewire = require('rewire');
var expect = require('chai').expect;
var _jst = rewire('../../dist/jst.js');

JST = _jst.__get__('JST');

describe('JST', function(){

    describe('isNode', function(){
        it('should be true if executed in node.js environment, otherwise false', function(){

            if(typeof global.it === 'function')
                expect(JST.isNode()).to.be.true;
            else
                expect(JST.isNode()).to.be.false;
        });
    });

    describe('isBrowser', function(){
        it('should be false if executed in node.js environment, otherwise true', function(){

            if(typeof global.it === 'function')
                expect(JST.isBrowser()).to.be.false;
            else
                expect(JST.isBrowser()).to.be.true;
        });
    });

    describe('isOnline', function(){
        it('should return a boolean value indicating online status', function(done){

            if(typeof global.it === 'function')
            {
                var _callback = function(_bool){
                    done();
                    return expect(_bool).to.be.a('boolean');
                };
                JST.isOnline('gameworker.de', _callback);
            }
            else
            {
                expect(JST.isOnline()).to.be.a('boolean');
            }

        });
    });
});