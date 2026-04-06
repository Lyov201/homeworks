function getPrototypeMethods(obj) {
    let res = [];
    let tmp = obj.__proto__;
    if(tmp == null || tmp === Object.prototype) return [];
    const names = Object.getOwnPropertyNames(tmp);
    // console.log(names);
    for(let i = 0; i < names.length; ++i){
        if(typeof( tmp[names[i]] ) === 'function' && names[i] != "constructor") {
            res.push(names[i]);
        }
    }
    return res;
}


function User(name) {
 this.name = name;
}

User.prototype.sayHi = function () {
 return `Hi, ${this.name}`;
};

User.prototype.getName = function () {
 return this.name;
};
const user = new User("Alex");

// getPrototypeMethods(user)


console.log(getPrototypeMethods(user)); // ["sayHi", "getName"] order may vary
console.log(getPrototypeMethods({ a: 1 })); // []
console.log(getPrototypeMethods([]).includes("push")); // true

const base = {
 x: 10,
 print() {
   return "hello";
 }
};

const obj = Object.create(base);

console.log(getPrototypeMethods(obj)); // ["print"]
console.log(getPrototypeMethods(Object.create(null))); // []