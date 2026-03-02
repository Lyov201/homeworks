function countChar(str , l) {
   let arr = str.split('');
   let count = 0;

   for (let i =0 ; i<arr.length ; ++i){
    if(l == arr[i]){
        count++;
    }
   }
   return count;
}

let str1 = 'hello';
let str2 = 'JavaScript';
let str3 = 'abc';
let char1 = 'l';
let char2 = 'a';
let char3 = 'd';

console.log(countChar(str3, char3));