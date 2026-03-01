let str = "HELLO";
function reverse(str) {
    let string = "";
    for(let i = str.length -1 ;i  >= 0 ; --i ) {
        string += str[i];
    }
    return string;
}
let x = reverse(str);
console.log(x);
