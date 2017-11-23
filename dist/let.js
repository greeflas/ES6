'use strict';

// ES5: var
if (true) {
    var es5 = 'es5';
}

console.log(es5);

// ES6: let
if (true) {
    var es6 = 'es6';
}

// console.log(es6);

var buttons = document.querySelectorAll('button');

var _loop = function _loop(i) {
    button = buttons[i];


    button.innerText = i;
    button.onclick = function () {
        // if `var i` => 3
        // if `let i` => current index
        console.log(i);
    };
};

for (var i = 0; i < buttons.length; i++) {
    var button;

    _loop(i);
}