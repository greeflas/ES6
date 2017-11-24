// supported by all new browsers

// arrow function syntax

let min = (a, b) => a - b;

let square = x => x * x;

let getLabel = () => 'Label';

let log = () => console.log('Logging...');

let mult = (a, b) => {
    let res = a * b;
    return res;
};

let getPerson = () => ({name: 'Peter'});

// Immediately Invoked Function Expression
(() => console.log('IIFE'))();

console.log(`Min: ${min(3, 1)}`);
console.log(`Square: ${square(2)}`);
console.log(`Get label: ${getLabel()}`);
log();
console.log(`Mult: ${mult(2, 4)}`);
console.log(getPerson());

// usage of arrow functions

let IDs = [1, 2, 3, 4, 5, 6];
let sum = 0;

IDs.forEach(id => sum += id);

console.log(`Array sum: ${sum}`);