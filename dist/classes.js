'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// supported by all new browsers

var Task = function () {
    // class constructor
    function Task() {
        var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.defaultTitle();

        _classCallCheck(this, Task);

        // creating of class properties
        this.title = title;
        this._done = false;

        Task.total++;

        console.log('Task "' + this.title + '" was created.');
    }

    // getter/setter for class property


    _createClass(Task, [{
        key: 'complete',


        // class method
        value: function complete() {
            this.done = true;
            console.log('Task "' + this.title + '" is done!');
        }

        // static class method

    }, {
        key: 'done',
        get: function get() {
            return this._done ? 'Completed' : 'Uncompleted';
        },
        set: function set(value) {
            this._done = value;
        }
    }], [{
        key: 'defaultTitle',
        value: function defaultTitle() {
            return 'Task #' + (Task.total + 1);
        }
    }]);

    return Task;
}();

// static class property


Task.total = 0;

// creation of class object
var task = new Task('Learn ES6');

console.log(task.done); // call's getter
task.complete(); // call class method
console.log(task.done); // call's getter

// creation of class object
var task2 = new Task();