setTimeout(() => console.log("A"), 1000);

setTimeout(() => console.log("B"), 0);

console.log("C");

// console.log("C") executes first because it is synchronous

// "B" has 0ms delay, so it enters the Macrotask Queue first

// "A" waits 1000ms before entering the queue

// final output:
// C
// B
// A