// supported by all new browsers

class Task {
    // class constructor
    constructor(title = Task.defaultTitle()) {
        // creating of class properties
        this.title = title;
        this._done = false;

        Task.total++;

        console.log(`Task "${this.title}" was created.`);
    }

    // getter/setter for class property
    get done() {
        return this._done ? 'Completed' : 'Uncompleted';
    }

    set done (value) {
        this._done = value;
    }

    // class method
    complete() {
        this.done = true;
        console.log(`Task "${this.title}" is done!`);
    }

    // static class method
    static defaultTitle() {
        return `Task #${Task.total + 1}`;
    }
}

// static class property
Task.total = 0;

// creation of class object
let task = new Task('Learn ES6');

console.log(task.done); // call's getter
task.complete(); // call class method
console.log(task.done); // call's getter

// creation of class object
let task2 = new Task();
