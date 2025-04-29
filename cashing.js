const memoizeAddition = () => {
    let cash = {};
    return (value) => {
        if (value in cash) {
            console.log("Fetching From Cash");
            return cash[value];
        } else {
            console.log("Calculating Result");
            let Result = value * 10111110221;
            cash[value] = Result;
            return Result;
        }
    };
};

const addition = memoizeAddition();
console.log(addition(20)); //output: 40 calculated
console.log(addition(20)); //output: 40 cached
