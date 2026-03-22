
function trace(cb) {
    cb.history = [];
    return function c(a,b) {
        c.history = [];
        let res = cb(a,b);
        cb.history.push({args: [a,b],output: res});
        c.history = cb.history;
        return res;
    }
}

function foo(a, b) {
 return a + b;
}

const tracedFunc = trace(foo);
console.log(tracedFunc(1, 2)); //3
console.log(tracedFunc(2, 4, 6)); //6
console.log(tracedFunc.history); //[{args:[1,2], output: 3}, {args:[2,4], output:6}}]