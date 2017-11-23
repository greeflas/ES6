// ES5: var
if (true) {
    var es5 = 'es5';
}

console.log(es5);

// ES6: let
if (true) {
    let es6 = 'es6';
}

// console.log(es6);

var buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    var button = buttons[i];

    button.innerText = i;
    button.onclick = function () {
        // if `var i` => 3
        // if `let i` => current index
        console.log(i);
    }
}