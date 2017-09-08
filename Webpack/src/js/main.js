// Module IIFE
// Immediately Invoked Function Expression
/*
(function () {
    var div = document.querySelector('.horloge');
    var clock = new Horloge(div);
    clock.start();
}());
*/

import { Horloge } from "./horloge";

var div = document.querySelector('.horloge');
var clock = new Horloge(div);
clock.start();