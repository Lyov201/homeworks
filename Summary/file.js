// 1

// function sum(a, b, c) {
//     return a + b + c;
// }
// let arr = [10, 20, 30];

// let res = sum.apply(null, arr);
// console.log(res);

// 2

// const student1 = { name: "Anna", score: 80 };
// const student2 = { name: "Mark", score: 95 };

// function printResult() {
//  console.log(this.name + " scored " + this.score);
// }

// let a = printResult.call(student1);
// let b = printResult.apply(student2);

// console.log(a , b);

// 3

// const user = {
//   name: "Alex",
//   greet() {
//     return "Hello " + this.name;
//   }
// };

// const admin = {
//   name: "Admin"

// };

// let a = user.greet.apply(admin);
// console.log(a);


//. 4

// const numbers = [5, 12, 8, 20, 3];
// let a = Math.max.apply(null, numbers);
// console.log(a);

//  5

// const obj1 = {
//  value: 10,
//  getValue() {
//    return this.value;
//  }
// };

// const obj2 = {
//  value: 50
// };

// let a = obj1.getValue.call(obj2);
// console.log(a);


//  6 


// function total(a, b, c) {
//  return a + b + c;
// }

// const args = [7,8,9];

// let a = total.apply(null, args);
// console.log(a);


//. 7

// function show() {
// return this.name;
// }
// const obj = { name: "Test" };
// const bound = show.bind(obj);
// console.log(bound.call({ name: "Wrong" }));


// //  8

// function show() {
//    return  ` ${this.name} has ${this.points} points `;
// }

// const p1 = { name: "Anna", points: 10 };
// const p2 = { name: "Mark", points: 25 };

// let a = show.bind(p1);
// let b = show.bind(p2);

// console.log(a(), b());


//   9 


// function sum(a, b, c) {
//   return a + b + c;
// }

// function execute(fn, arr) {
//     return fn.apply(null, arr);
// }

// console.log(execute(sum , [2,4,6]));


//  10 

// function show() {
//  return this.name;
// }

// const a = { name: "A" };
// const b = { name: "B" };
// const fn = show.bind(a);

// console.log(fn.call(b));


//  11

// const obj = {
//  value: 100,
//  get() {
//    const inner = () => {
//      return this.value;
//    }
//    return inner();
//  }
// };

// console.log(obj.get());


//  12

// const obj = {
//   value: 1,
//   add(x) {
//     this.value += x;
//     return this;
//   }
// };

// console.log(obj.add(5).add(10).value);

//  Setter and Getter


// class Employee {
//     constructor(firstName , lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// class Account {
//     _password;
//     constructor(password) {
//         this.password = password;
//     }
//     set password(value) {
//         if(value.length <= 6) {
//             console.log("Password is too short");
//             return;
//         }
//         this._password = value;
//     }
// }

// class Temperature {
//     _celsius;
//     constructor(celsius) {
//         this.celsius = celsius;
//     }

//     get fahrenheit() {
//         return this._celsius * (9/5) + 32;
//     }
//     set celsius(value) {
//         this._celsius = value;
//     }
// }

// class Counter {
//     _count = 0;
//     constructor() {}
//      increment() {
//         ++this._count;
//      }
//      get count() {
//         return this._count;
//      }
// }

// class Product {
//     _price;
//     constructor(price) {
//         this.price = price;
//     }

//     set price(value) {
//         if(value < 0 ) {
//             console.log("Price can`t be a negative number");
//             return;
//         }
//         this._price = value;
//     }

//     get price() {
//         return 0.9 * this._price;
//     }
// }

//  class BankAccount {
//     _ballance = 0;

//     constructor() {}

//     set ballance(value) {
//         if(value < 0) {
//             console.log("the deposit cant be a negative");
//             return;
//         }
//         this._ballance += value;
//     }

//     get ballance() {
//         return this._ballance;
//     }
//  }

//  class Rectangle {
//     _height;
//     _width;
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     set height(value) {
//         this._height = value;
//     }

//     set width(value) {
//         this._width = value;
//     }

//     get area() {
//         return this._height * this._width;
//     }
//  }

//  class Email {
//     _email;
//     constructor(email) {
//         this.email = email;
//     }

//     set email(value) {
//         if(!(value.includes("@"))) {
//            console.log("invalid input");
//            return;
//         }
//         this._email = value;
//     }
//  }

//  class Cart {
//     _total = 0;
//     constructor(total) {
//         this.total = total;
//     }
//     set total(price) {
//         if(price < 0) {
//             console.log("price must be a positive");
//             return;
//         }
//         this._total += price;
//     }
//     get total() {
//         return this._total;
//     }
// }

// class Car {
//     _speed;
//     constructor(speed) {
//         this.speed = speed;
//     }

//     set speed(value) {
//         if(value > 200) {
//             console.log("Too fast");
//             return;
//         }
//         this._speed = value;
//     }
// }


// Map, Zip, Filter

////// ______1
// function double(arr) {
//     return arr.map(element => element*2);
// }

// console.log(double([1,2,3]));

//// _______2
// function upper(arr) {
//     return arr.map(element => element.toUpperCase());
// }


///// _______3

// function age(arr) {
//     return arr.map(element => element.age);
// }
// console.log(age([{name: "Bob", age: 21}, {name: "Joe", age:22}]));


//// ______4

// function even(arr) {
//     return arr.filter(element => element % 2 === 0);
// }
// console.log(even([1,2,3,4,5,6]));


//// ______5

// function adult(arr) {
//     return arr.filter(element => element.age >= 18);
// }

// console.log(adult([{name:"Joe", age:19} , {name: "Bob", age:12}]));


//// ______6

// function words(arr) {
//     return arr.filter(element => element.length > 5);
// }

// console.log(words(["hi", "banana", "apple", "bye" ]));


//// ______7

// function names(arr) {
//     let newArr = arr.filter(x => x.age >= 18);
//     return newArr.map(element => element.name);    
// }
// console.log(names([{name:"Joe" , age: 12}, {name:"Cody", age:21}]));


//// ______8

// function square(arr) {
//     const newArr = arr.filter(x => x %2 == 0);
//     return newArr.map(element => element ** 2);
// }

// console.log(square([1,2,3,4,5,6]));


//// ______9

// function overThausand(products) {
//     return products.filter(element => element.price > 1000);
// }

// console.log(overThausand([{productName: "salt" , price:500} , {productName: "Cola" , price:1200}]));


//// ______10

// function findAdults(arr) {
//     return arr.filter(x => x.age >=18);
// }

// let x = findAdults([{name: "Anna", age: 17},{name: "John", age: 20}]);

//  function foo() {
//     for(let i = 0; i < this.length; ++i) {
//         console.log(`${this[i].name} is ${this[i].age} years old`);
//     }
// }

// foo.call(x);


