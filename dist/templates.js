'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello, ', ''], ['Hello, ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// string template
function sayHiTo(name) {
    console.log(('Hi, ' + name + '!').toUpperCase());
}

sayHiTo('Vasya');

// string template with expression
function add(a, b) {
    console.log(a + ' + ' + b + ' = ' + (parseInt(a) + parseInt(b)));
}

add(2, 5);

// using tags i string templates
function upperName(literals, name) {
    return literals[0] + name.toUpperCase();
}

var name = 'Masha';
console.log(upperName(_templateObject, name));