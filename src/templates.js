// string template
function sayHiTo(name) {
    console.log(`Hi, ${name}!`.toUpperCase());
}

sayHiTo('Vasya');


// string template with expression
function add(a, b) {
    console.log(`${a} + ${b} = ${parseInt(a) + parseInt(b)}`);
}

add(2, 5);

// using tags i string templates
function upperName(literals, name) {
    return literals[0] + name.toUpperCase();
}

let name = 'Masha';
console.log(upperName`Hello, ${name}`);
