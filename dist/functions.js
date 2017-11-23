'use strict';

// default parameters
function sayHi() {
    var username = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Guest';

    console.log('Hi, ' + username + '!');
}

sayHi('Vasya');
sayHi();

// endless quantity of arguments
function add() {
    var sum = 0;

    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
    }

    numbers.forEach(function (number) {
        sum += number;
    });
    return sum;
}

console.log(add(2, 6, 8, 3, 8));