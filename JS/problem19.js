function trueSum(a ,b) {
    if (typeof a === typeof b ) {
        return a + b;
    }
    else return "Ivalid Input"
}
let num1 = 3;
let num2 = '3';
console.log(trueSum(num1 , num2));
