Array.prototype.mySum = function() {
    let res = 0;
    if(this.length === 0) return 0;
    for(let i = 0; i < this.length; ++i) {
        if(this[i] != Number(this[i]) || typeof this[i] != "number") {
            throw new Error("Error");
        }
        res += this[i];
    }
    return res;
}

console.log([1, 2, 3].mySum()); // 6
console.log([10, -5, 4].mySum()); // 9
console.log([].mySum()); // 0

console.log([1, "2", 3].mySum()); // Error
console.log([1, NaN].mySum()); // Error
console.log([true, 2].mySum()); // Error