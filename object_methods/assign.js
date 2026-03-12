let person1 = {
    name: "Areg",
    age: "21",
    univercity: "RAU"
};

let person2 = {
    name: "Areg",
    weight: "80",
    height: "1.80"
};

let mergedPerson = {};

Object.assign(mergedPerson, person1, person2);
console.log(mergedPerson);
