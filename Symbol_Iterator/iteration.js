    // let myRange = {
    //     from: 1,
    //     to: 10,
    //     [Symbol.iterator]() {
    //         let current = this.from;
    //         return {
    //             next:() => {
    //                 // console.log(this)
    //                 if(current <= this.to) {
    //                     return {value: current++, done: false}
    //                 } else {
    //                     return {done: true};
    //                 }
    //             }
    //         }
    //     }
    // }

    // for (let num of myRange) {
    //   console.log(num);
    // }
    // console.log([...myRange]);


    let myRange = {
        from: 1,
        to: 10,
        [Symbol.iterator]() {
            let current = this.to;
            return {
                next:() => {
                    // console.log(this)
                    if(current >= this.from) {
                        return {value: current--, done: false}
                    } else {
                        return {done: true};
                    }
                }
            }
        }
    }

    for (let num of myRange) {
    console.log(num);
    }
    console.log([...myRange]);
