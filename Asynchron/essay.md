// 1. Call Stack is an array where function calls are pushed,
// and after execution they are popped.
// It works with the LIFO (Last In, First Out) system.

// 2. Web APIs are browser-provided tools that help solve different problems,
// like setTimeout, fetch, DOM events, etc.

// 3. Macrotask Queue is a queue where asynchronous tasks wait
// for their turn to go into the Call Stack.
// Examples: setTimeout, setInterval, events.

// 4. Microtask Queue is a queue where asynchronous tasks wait
// for their turn to go into the Call Stack.
// Microtasks have higher priority than macrotasks.
// Examples: Promise.then, catch, finally, queueMicrotask.

// Execution order:
// 1. Synchronous code
// 2. Microtasks
// 3. Macrotasks

// When the Call Stack becomes empty,
// the Event Loop first executes all microtasks,
// then executes one macrotask.

// 5. Event Loop is a process that continuously checks
// whether the Call Stack is empty,
// and if it is, pushes microtasks and macrotasks
// into the Call Stack for execution.