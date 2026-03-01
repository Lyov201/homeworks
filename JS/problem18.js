function primitive(a) {
    if(typeof a === "number"  || typeof a === "string" || typeof a === "boolean" || typeof a === "undefined" || a=== null || typeof a === "bigint"){
        return true;
    } 
    else return false;
}
let a = 12;
console.log(primitive(a));