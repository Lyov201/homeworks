function isNUm(a) {
    if( typeof a === "number") {
        return Number(a);
    }
    else null;
}
let number = 'abc';
console.log(isNUm(number));