'use strict';

// arrays
var staticLanguages = ['C', 'C++', 'C#'];
var dynamicLanguages = ['PHP', 'JavaScript'];

var languages = [].concat(staticLanguages, ['Go'], dynamicLanguages, ['Python']);

console.log(languages);

// functions
function calc(x, y, z) {
    console.log(x + y + z);
}

var numbers = [1, 2, 3];

calc.apply(undefined, numbers);