function fibs(n) {
    return n < 2 ? n : fibs(n - 1) + fibs (n - 2);
}

const fibs2 = n => n < 2 ? n : fibs(n - 1) + fibs (n - 2);

const fibs2m = (function () {
    let m = [0, 1];
    let f = n => {
        let r = m[n];
        if (typeof r !== 'number') {
            r = f(n - 1) + f(n - 2);
            m[n] = r;
        }
        return r;
    };
    return f;
}());

function fibs3(n) {
    if (n < 2) {
        return n;
    } else {
        i = 1;
        a = 0;
        b = 1;
        while (++i <= n) {
            [a, b] = [b, a + b];
        }
    }
    return b;
}

const fibs4 = n => {
    let a = 0, b = 1, i= 1;
    return n < 2 ? n : (() => {while (++i <= n) [a, b] = [b, a + b]; return b})()
};

const fibs5 = n => n < 2 ? n : (() => {let a,b,i; for (a = 0, b = 1, i = 1; ++i <= n; [a, b] = [b, a + b]); return b})();

const fibs6 = n => {for(a=0,b=1;--n;[a,b]=[b,a+b]);return b};

f1=n=>{for(a=0,b=1;--n;[a,b]=[b,a+b]);return b};
f2=n=>((function(){for(a=0,b=1;--n;[a,b]=[b,a+b]);}()),b);

// var a=n=>n<2?1:a(n-1)+a(n-2);  // wrong!

// console.log(fibs(30));
// console.log(fibs2(30));
// console.log(fibs3(30));
// console.log(fibs4(30));
// console.log(fibs2(30));
// console.log(fibs2m(30));
console.log(fibs6(30));
console.log(f1(30));
console.log(f2(30));
console.log(f1(0));
console.log(f2(0));
// console.log(fibs6(1));

