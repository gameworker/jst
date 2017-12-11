"use strict";

module.exports = {

    isNode:  function(){return typeof global !== "undefined" && ({}).toString.call(global) === '[object global]';},

    isBrowser:  function(){return typeof window !== 'undefined' && ({}).toString.call(window) === '[object Window]';},

    isOnline: function (_host, _callback) {

        if (this.isNode()) {
            if (_host && _callback)
            {
                require('dns').resolve(_host, function (err) {
                    if (err)
                    {
                        console.warn('JST.isOnline() : false -> No connection to ' + _host);
                        _callback(false);
                    }
                    else
                    {
                        console.log('JST.isOnline() : true -> ' + _host, "is reachable.");
                        _callback(true);
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
    }
};