function recursion(n){
    setTimeout(()=> {
        console.log(n);
        recursion(n + 1);
    }, 1000);
}

recursion(1)