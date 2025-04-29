//Check if Number is Armstrong Number
function isArmstrongNumber(num) {
    const strNum = num.toString(); //"154"
    const length = strNum.length; //3
    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum += Math.pow(parseInt(strNum[i]), length) //1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190
    }
    if (sum === num) {
        return `${num} is an Armstrong number`;
    } else {
        return `${num} is not an Armstrong number`;
    }
}

// Example usage:
const number = 153; // Example Armstrong number
console.log(isArmstrongNumber(number)); // Output: true