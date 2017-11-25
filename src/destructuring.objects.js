// example 1
let user = {
    username: 'vasya2017',
    age: 25,
    social: {
        facebook: 'vasyapupkin',
        instagram: '@pupkin'
    }
};

let {username} = user;
console.log(username);

// example 2
let {id = 1} = user;
console.log(id);

// example 3
let {social: {facebook: fb, instagram: inst}} = user;
console.log(fb, inst);

// example 4
function post(url, {data, cache}) {
    console.log(data, cache);
}

post('/api/users', {data: user, cache: false});