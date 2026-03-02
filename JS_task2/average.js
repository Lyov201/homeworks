function average(arr) {
    let sum = 0;
    
    for (let i = 0; i<arr.length ; ++i) {
        sum += arr[i];
    }
    return sum/arr.length;
}

let arr1 = [2,4,6];
let arr2 = [1,1,1,1];
let arr3 = [5];
let arr4 = [-2 , -3, 0 , 87, -12 , NaN];

console.log(average(arr4));