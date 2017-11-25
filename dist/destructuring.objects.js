'use strict';

// example 1
var user = {
    username: 'vasya2017',
    age: 25,
    social: {
        facebook: 'vasyapupkin',
        instagram: '@pupkin'
    }
};

var username = user.username;

console.log(username);

// example 2
var _user$id = user.id,
    id = _user$id === undefined ? 1 : _user$id;

console.log(id);

// example 3
var _user$social = user.social,
    fb = _user$social.facebook,
    inst = _user$social.instagram;

console.log(fb, inst);

// example 4
function post(url, _ref) {
    var data = _ref.data,
        cache = _ref.cache;

    console.log(data, cache);
}

post('/api/users', { data: user, cache: false });