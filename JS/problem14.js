function foo(num1) {
    if (Number.isSafeInteger(num1)){
        return true;
    }
    else return false;
}
let number = 6/0;
console.log(foo(number));