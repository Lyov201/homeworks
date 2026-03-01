function plObj(a) {
    if(typeof a === "object" && typeof a !== null && typeof a !== "function" && !Array.isArray(a)){
        return true;
    }
    else{
     return false;
    }
}
var obj = {}; 
console.log(plObj(obj));