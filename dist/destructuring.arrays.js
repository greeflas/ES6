'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// supported by all new browsers

// example 1
var levels = [1, 2, 3];
var junior = levels[0],
    middle = levels[1],
    senior = levels[2];


console.log(junior, middle, senior);

// example 2
var jun = levels[0],
    sen = levels[2];


console.log(jun, sen);

// example 3
var j = levels[0],
    other = levels.slice(1);

console.log(j, other);

// example 4
var extendedLevels = [[1, 2], [3, 4], 5];
var extendedJunior = extendedLevels[0],
    extendedMiddle = extendedLevels[1],
    extendedSenior = extendedLevels[2];


console.log(extendedJunior, extendedMiddle, extendedSenior);

// example 5
var programmingLangs = ['PHP', 'JavaScript'];
var php = programmingLangs[0],
    js = programmingLangs[1],
    _programmingLangs$ = programmingLangs[2],
    go = _programmingLangs$ === undefined ? 'GoLang' : _programmingLangs$;


console.log(php, js, go);

// example 6
function computedLevels(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        lvl1 = _ref2[0],
        lvl2 = _ref2[1];

    console.log(lvl1, lvl2);
}

computedLevels([3, 6]);

// example 7
var yes = 'Yes';
var no = 'No';

var _ref3 = [no, yes];
yes = _ref3[0];
no = _ref3[1];


console.log('Yes is ' + yes);
console.log('No is ' + no);