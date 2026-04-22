let digits = [1, 2, 3];
let extraNumbers = {
    "0": "1",
    "1": "2",
    length: 2,

    [Symbol.isConcatSpreadable]: true
}
console.log(digits.concat(extraNumbers));

bonus = [4, 5];
bonus[Symbol.isConcatSpreadable] = false;
console.log(digits.concat(bonus));

// Objects are not spread by default in concat.
// Setting Symbol.isConcatSpreadable = true makes them spread.
//
// Arrays are spread by default,
// but setting it to false prevents spreading.