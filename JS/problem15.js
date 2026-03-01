function isNUm(a) {
    if( typeof Number (a) === "number") {
        return Number(a);
    }
    else NaN;
}
let number = 'abc';
console.log(isNUm(number));