function sumArray(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

let arr1 = [1,2,3];
let arr2 = [-1,1];
let arr3 = [5];

console.log(sumArray(arr3));