let skyscraper = {
    height: "1894",
    year: "2006",
    price: "450000000"
};

let arr = Object.entries(skyscraper);
let newArr = [];
for(let i = 0; i < arr.length; ++i) {
    let key = arr[i][0];
    let value = arr[i][1];

    if(value > 2000) {
        newArr.push([key,value]);
    }
}
let obj = Object.fromEntries(newArr);
console.log(obj);
