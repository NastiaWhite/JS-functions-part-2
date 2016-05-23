(function() {
    'use strict';
    if (typeof Object.assign != 'function') {
        (function() {
            Object.assign = function() {
                var myObj = arguments[0];
                for (var i = 1; i < arguments.length; i++) {
                    var obj = arguments[i];
                    for (var par in obj) {
                            myObj[par] = obj[par];
                        }
                }
                return myObj;
            };
        })
      }
    })();
