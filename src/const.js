// const supported by all browsers

const MATH = {
    PI: 3.14159
};

MATH.PI = 3.15;

console.log(MATH.PI); // change property of object - OK

MATH = {}; // change value of const - ERROR