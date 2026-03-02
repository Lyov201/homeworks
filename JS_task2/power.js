function pow (base , exp) {
    //return Math.pow(base , exp);
    let res=1;
    for (let i = 0; i<exp ; ++i){
        res *=base;
    }
    return res;
}

let b1 = 2;
let b2 = 5;
let b3 = 3;
let e1 = 3;
let e2 = 0;
let e3 = 2;

console.log(pow(b3,e3));