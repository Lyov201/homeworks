let obj = {};
function compare(a ,b) {
    obj.equal = a == b;
    obj.triplEqual = a==="b"; 
    return obj;   
}

let a = 42;
let b = '42';

console.log(compare(a,b));

