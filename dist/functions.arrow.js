'use strict';

// supported by all new browsers

// arrow function syntax

var min = function min(a, b) {
    return a - b;
};

var square = function square(x) {
    return x * x;
};

var getLabel = function getLabel() {
    return 'Label';
};

var log = function log() {
    return console.log('Logging...');
};

var mult = function mult(a, b) {
    var res = a * b;
    return res;
};

var getPerson = function getPerson() {
    return { name: 'Peter' };
};

// Immediately Invoked Function Expression
(function () {
    return console.log('IIFE');
})();

console.log('Min: ' + min(3, 1));
console.log('Square: ' + square(2));
console.log('Get label: ' + getLabel());
log();
console.log('Mult: ' + mult(2, 4));
console.log(getPerson());

// usage of arrow functions

var IDs = [1, 2, 3, 4, 5, 6];
var sum = 0;

IDs.forEach(function (id) {
    return sum += id;
});

console.log('Array sum: ' + sum);