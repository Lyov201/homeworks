function delay(message, time) {
    let now = Date.now();
    while(true) {
        if(now + time ===  Date.now()){
            console.log(message);
            return
        }
    }
}
delay("Hello", 3000);
