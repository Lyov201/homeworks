
function exactType(a) {
    if(a===null) {
        return console.log("null");
    }
    else if(typeof a === "function"){
        return console.log("fucntion");
    }
    else if(typeof a === "string") {
        return console.log("string");
    }
    else if(typeof a === "object"){
        return console.log("object");
    }
    else if(Array.isArray(a)) {
        return   console.log("array");
    } 
    
}
let str = [1,2,3];
let foo = function() {};
let obj = {};
exactType(foo);