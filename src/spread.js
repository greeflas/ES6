// arrays
let staticLanguages = ['C', 'C++', 'C#'];
let dynamicLanguages = ['PHP', 'JavaScript'];

let languages = [...staticLanguages, 'Go', ...dynamicLanguages, 'Python'];

console.log(languages);

// functions
function calc(x, y, z) {
    console.log(x + y + z);
}

let numbers = [1, 2, 3];

calc(...numbers);