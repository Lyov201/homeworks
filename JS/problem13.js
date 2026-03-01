let obj = {};
function compare(a ,b) {
    obj.equal = 2 == "2";
    obj.triplEqual = 2==="2"; 
    return obj;   
}

let a = 42;
let b = '42';

console.log(compare(a,b));

