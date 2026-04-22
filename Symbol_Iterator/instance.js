class OddValidator {
    static [Symbol.hasInstance](instance) {
        if(typeof instance === "number") {
            if(instance %2 === 1) {
                return true;
            }
        } return false;
    }
}

console.log(5 instanceof OddValidator)
console.log(10 instanceof OddValidator)
console.log("7" instanceof OddValidator)