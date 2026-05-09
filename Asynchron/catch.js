let promise = new Promise((good, bad)=> {
    bad("Server Error");
});

promise.catch((res) => {
    console.log(res);
});
