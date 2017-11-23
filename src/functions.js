// default parameters
function sayHi(username = 'Guest') {
    console.log(`Hi, ${username}!`);
}

sayHi('Vasya');
sayHi();

// endless quantity of arguments
function add(...numbers) {
    let sum = 0;
    numbers.forEach(function (number) {
        sum += number;
    });
    return sum;
}

console.log(add(2, 6, 8, 3, 8));