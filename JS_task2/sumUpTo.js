function sumUpTo(n) {
    let sum = 0;
    for (let i = 0; i<n ; ++i){
        sum += i;
    }
    return sum;
}

let result = 12;
console.log(sumUpTo(result));
