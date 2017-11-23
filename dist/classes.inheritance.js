'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// supported by all new browsers

var Animal = function () {
    function Animal() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Sam';

        _classCallCheck(this, Animal);

        this.name = name;
        Animal.total++;

        console.log('[Animal]: hi, my name is ' + name);
    }

    _createClass(Animal, [{
        key: 'eat',
        value: function eat(value) {
            console.log('Eating ' + value + '...');
        }
    }], [{
        key: 'showAnimalsCount',
        value: function showAnimalsCount() {
            console.log('Animals total: ' + Animal.total);
        }
    }]);

    return Animal;
}();

Animal.total = 0;

var Cat = function (_Animal) {
    _inherits(Cat, _Animal);

    function Cat(name) {
        _classCallCheck(this, Cat);

        var _this = _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this, name));

        console.log('[Cat]: meow, my name is ' + name);
        return _this;
    }

    _createClass(Cat, [{
        key: 'eat',
        value: function eat(value) {
            console.log('Mrrr... Mrrr...');
            _get(Cat.prototype.__proto__ || Object.getPrototypeOf(Cat.prototype), 'eat', this).call(this, value);
        }
    }]);

    return Cat;
}(Animal);

var animal = new Animal();
animal.eat('grass');

Animal.showAnimalsCount();

var cat = new Cat('Ketty');
cat.eat('chicken');

Cat.showAnimalsCount();