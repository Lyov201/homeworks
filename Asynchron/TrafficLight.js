function light(color, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(color);
            resolve();
        }, delay);
    });
}
function traffic() {
    light("red", 3000)
    .then(()=> {
        light("yellow",1000);
    })
    .then(()=> {
        light("green", 2000);
    })
    .then(()=> {
        traffic();
    })

}
 traffic()


















