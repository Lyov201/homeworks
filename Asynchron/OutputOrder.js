console.log("Start");

setTimeout(() => {
 console.log("Timeout");
}, 0);

console.log("End");

// console.log("Start") goes to the Call Stack
// and executes immediately because it is synchronous

// setTimeout does not execute immediately
// its callback waits in the timer/Web API system
// then moves to the Macrotask Queue

// console.log("End") executes next
// because synchronous code runs first

// when the Call Stack becomes empty
// the Event Loop moves the setTimeout callback
// from the Macrotask Queue to the Call Stack

// finally the callback executes

// output Start , End, Timeout