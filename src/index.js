//'use strict';

var JST = (function(){

    var _test = function(){
      console.log('test');
    };

    var test = function(){
        _test();
    };

    return {
        test: test
    }
})();
