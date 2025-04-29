// Function to calculate the factorial of a number using recursion
const factorial =(n)=>{
    if(n<0) return `${n} is not a valid input`;
    if(n===0 || n===1) return 1;
    return n*factorial(n-1);
}

console.log(factorial(-1)); // 120
