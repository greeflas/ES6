// supported by all new browsers

class Animal {
    constructor(name = 'Sam') {
        this.name = name;
        Animal.total++;

        console.log(`[Animal]: hi, my name is ${name}`);
    }

    eat(value) {
        console.log(`Eating ${value}...`);
    }

    static showAnimalsCount() {
        console.log(`Animals total: ${Animal.total}`);
    }
}

Animal.total = 0;

class Cat extends Animal {
    constructor(name) {
        super(name);

        console.log(`[Cat]: meow, my name is ${name}`);
    }

    eat(value) {
        console.log('Mrrr... Mrrr...');
        super.eat(value);
    }
}

let animal = new Animal();
animal.eat('grass');

Animal.showAnimalsCount();

let cat = new Cat('Ketty');
cat.eat('chicken');

Cat.showAnimalsCount();