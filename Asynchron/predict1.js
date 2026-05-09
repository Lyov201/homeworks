console.log("1");

setTimeout(() => {
 console.log("2");
}, 0);
Promise.resolve().then(() => {
 console.log("3");
});

console.log("4");

// OUTPUT: 1 4 3 2
// order: sync code → microtasks (Promise.then) → macrotasks (setTimeout)