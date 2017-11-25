// supported by all new browsers

// example 1
let levels = [1, 2, 3];
let [junior, middle, senior] = levels;

console.log(junior, middle, senior);

// example 2
let [jun, , sen] = levels;

console.log(jun, sen);

// example 3
let [j, ...other] = levels;
console.log(j, other);

// example 4
let extendedLevels = [[1, 2], [3, 4], 5];
let [extendedJunior, extendedMiddle, extendedSenior] = extendedLevels;

console.log(extendedJunior, extendedMiddle, extendedSenior);

// example 5
let programmingLangs = ['PHP', 'JavaScript'];
let [php, js, go = 'GoLang'] = programmingLangs;

console.log(php, js, go);

// example 6
function computedLevels([lvl1, lvl2]) {
    console.log(lvl1, lvl2);
}

computedLevels([3, 6]);

// example 7
let yes = 'Yes';
let no = 'No';

[yes, no] = [no, yes];

console.log(`Yes is ${yes}`);
console.log(`No is ${no}`);
