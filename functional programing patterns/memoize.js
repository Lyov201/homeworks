
function factorial(a) {
 let res = 1;
 for (let i = 2; i <= a; ++i) {
   res *= i;
 }
 return res;
}

function memoize(cb) {
    const cashe = [];

    return function(a) {
        if (cashe[a]) {
            return cashe[a];
        }
        return cashe[a] = cb(a);
    }
}

const foo = memoize(factorial);
console.log(foo(5)); // 120
console.log(foo(5)); // 120

