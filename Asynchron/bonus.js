function wait(delay) {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve();
        },delay)
    })
}

wait(2000).then(() => {
 console.log("Done");
});
