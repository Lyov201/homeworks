let account = {
    balance : 1800,
    currency : "USD",
    [Symbol.toPrimitive](hint) {
         if ( hint === "number") {
            return this.balance;
         } 
        else if( hint === 'string') {
            return `Account Balance: ${this.balance + this.currency} `
         } return this.balance;
    }
}

console.log(+account);
console.log(String(account));
console.log(account + 500);
