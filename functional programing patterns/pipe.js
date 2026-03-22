
function pipe(...funcs) {
    return function (a) {
        let orig = a;
        for(let i = 0; i < funcs.length; ++i) {
            orig = funcs[i](orig);
            
        }
        return orig;
    }
 }


const add5 = a => a + 5;
const double = a => 2 * a;
const sub4 = a => a - 4;

const func = pipe(add5, add5, double, sub4); // 20
console.log(func(2));

