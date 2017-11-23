'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// supported by all new browsers

var firstName = 'Vasya';
var lastName = 'Pupkin';
var age = 19;

// creates object properties with names like in variables
var person = {
    firstName: firstName,
    lastName: lastName,
    age: age,

    // creates method in object
    showInfo: function showInfo() {
        console.log('\nFirst name: ' + this.firstName + '\nLast name: ' + this.lastName + '\nAge: ' + this.age + '\n        ');
    },


    // creates getter/setter
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        var parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person);
person.showInfo();

// create object properties dynamically
function createObject(property, name) {
    return _defineProperty({}, '_' + property, name);
}

var myObject = createObject('myProp', 'myValue');
console.log(myObject);