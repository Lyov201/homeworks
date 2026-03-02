function firstAndLast(arr){
    if (arr.length === 0){
        return arr;
    }
    let newArr= [];
    newArr[0] = arr[0];
    newArr[1] = arr[arr.length -1];
    return newArr;
}

let arr1 = [1,2,2,3,4,5,5];
let arr2 = [5];
let arr3 = [];
console.log(firstAndLast(arr3));