console.log("Start");

setTimeout(() => {
 console.log("Timeout 1");

 Promise.resolve().then(() => {
   console.log("Promise inside timeout");
 });
}, 0);

Promise.resolve().then(() => {
 console.log("Promise 1");
});

setTimeout(() => {
 console.log("Timeout 2");
}, 0);

console.log("End");

// OUTPUT:
// Start
// End
// Promise 1
// Timeout 1
// Promise inside timeout
// Timeout 2

// order:
// sync code → microtasks → macrotasks
// after each macrotask, JS checks microtasks again
