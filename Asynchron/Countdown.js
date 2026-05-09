for(let i = 5; i >= 1; --i){
    setTimeout( ()=> {
        console.log(i);
    },1000);
}
setTimeout(console.log,2000,"GO!"); 