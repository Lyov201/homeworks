function pay(balance, amount) {
    return new Promise((resolve,reject) => {
        if(amount <= balance) {
            resolve("Payment successful");
        } else {
            reject("Not enough money");
        }
    })
}

pay(1000, 300)
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});

pay(300, 1000)
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});