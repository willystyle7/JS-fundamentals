solve = function () {
    return {
        add: (a, b) => {
            return [ a[0] + b[0], a[1] + b[1] ];
        },

        multiply: (a, scalar) => {
            return [ a[0] * scalar, a[1] * scalar ];
        },

        length: (a) => {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2));
        },

        dot: (a, b) => {
            return a[0] * b[0] + a[1] * b[1];
        },

        cross: (a, b) => {
            return a[0] * b[1] - a[1] * b[0];
        }
    };
}();

var answer = solve.multiply([ 3.5, -2 ], 2);
console.log(answer);