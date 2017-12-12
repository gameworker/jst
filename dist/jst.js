/*! 
* @gameworker/jst v0.1.4
* https://github.com/gameworker/jst.git
* Copyright (c) 2017 gameworker
* Licensed MIT
*/
var JST = (function(){
    return {}
})(); 

(function(_jst){

    _jst.isNode = function(){return typeof global !== "undefined" && ({}).toString.call(global) === '[object global]';};

    _jst.isBrowser = function(){return typeof window !== 'undefined' && ({}).toString.call(window) === '[object Window]';};

    _jst.isOnline = function (_host, _callback) {

        if (this.isNode()) {
            if (_host && _callback)
            {
                require('dns').resolve(_host, function (err) {
                    if (err)
                    {
                        console.warn('JST.isOnline() : false -> No connection to ' + _host);
                        _callback.call(this, false);
                    }
                    else
                    {
                        console.log('JST.isOnline() : true -> ' + _host, "is reachable.");
                        _callback.call(this, true);
                    }
                });
            }
            else
            {
                console.warn("isOnline() needs host parameter and a callback function to pass true/false in Node.js environment!");
                return false;
            }
        }
        else
        {
            return window.navigator.onLine;
        }
    };

    return Object.freeze(_jst);

}(JST || {}));
