let user = {
    name: 'xyz',
    address: {
        home: {
            city: 'city1',
            state: 'state1'
        },
        office: {
            city: 'city2',
            state: 'state2'
        }
    },
    phone: {
        home: 1234,
        office: 5678
    }
};

// let output = {
//     user_name: 'xyz',
//     user_address_home_city: 'city1',
//     user_address_home_state: 'state1',
//     user_address_office_city: 'city2',
//     user_address_office_state: 'state2',
//     user_phone_home: 1234,
//     user_phone_office: 5678
// };

let output = {};
function solve(obj, prefix = 'user') {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') {
            solve(obj[key], `${prefix}_${key}`);
        } else {
            output[`${prefix}_${key}`] = obj[key];
        }
    });
}
solve(user);
console.log(output);

// same but with closure and pure function
function transform(obj) {
    let output = {};
    function solve(obj, prefix = 'user') {
        Object.keys(obj).forEach(key => {
            if (typeof obj[key] === 'object') {
                solve(obj[key], `${prefix}_${key}`);
            } else {
                output[`${prefix}_${key}`] = obj[key];
            }
        });
    }
    solve(obj);
    return output;
}

console.log(transform(user));

// third true pure variant
let transform3 = function() {
    let output = {};
    return function solve(obj, prefix = 'user') {
        Object.keys(obj).forEach(key => {
            if (typeof obj[key] === 'object') {
                solve(obj[key], `${prefix}_${key}`);
            } else {
                output[`${prefix}_${key}`] = obj[key];
            }
        });
        return output;
    }
}();
console.log(transform3(user));

// TODO - the opposite problem, form output to get user ???

function buildTree(obj, separator = '_') {
    let result = {};
    Object.keys(obj).forEach(key => {
        let levels = key.split(separator);
        let tempBranch = result;
        levels.forEach((level, idx) => {
            if (idx === levels.length - 1) {
                tempBranch[level] = obj[key];
            } else {
                if (!tempBranch.hasOwnProperty(level)) {
                    tempBranch[level] = {};
                }
                tempBranch = tempBranch[level];
            }
        });
    });
    return result;
}

console.log(buildTree(output));