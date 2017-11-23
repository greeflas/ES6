// supported by all new browsers

let firstName = 'Vasya';
let lastName = 'Pupkin';
let age = 19;

// creates object properties with names like in variables
let person = {
    firstName,
    lastName,
    age,

    // creates method in object
    showInfo() {
        console.log(`
First name: ${this.firstName}
Last name: ${this.lastName}
Age: ${this.age}
        `);
    },

    // creates getter/setter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        let parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person);
person.showInfo();

// create object properties dynamically
function createObject(property, name) {
    return {
        ['_' + property]: name
    };
}

let myObject = createObject('myProp', 'myValue');
console.log(myObject);