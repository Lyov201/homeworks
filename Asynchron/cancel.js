const id = setTimeout( ()=> {
    console.log("Executed");
    
}, 5000);
console.log("start timeout");
clearTimeout(id);
console.log("canceled timeout")