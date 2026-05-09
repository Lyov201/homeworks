console.log("1");

setTimeout(() => {
 console.log("2");

 Promise.resolve().then(() => {
   console.log("3");
 });

}, 0);

Promise.resolve().then(() => {
 console.log("4");
});

console.log("5");

setTimeout(() => {
 console.log("6");
}, 0);



// 1 and 5 are synchronous, so they execute first.

// Promise.then is a microtask,
// so 4 executes before macrotasks.

// setTimeout callbacks are macrotasks.
// The first setTimeout executes before the second one,
// so 2 prints first.

// Inside the first setTimeout,
// Promise.then creates a microtask,
// therefore 3 executes before the next macrotask.

// Finally, the second setTimeout executes and prints 6.

// Output:
// 1
// 5
// 4
// 2
// 3
// 6