  "use strict";
 (function() {
     function mySetInterval(a, b) {
         setTimeout(function() {
             a ();
             mySetInterval(a, b);
         }, b);
     }
     mySetInterval(function() {
         console.log("Hello");
     }, 2000);
 })();
