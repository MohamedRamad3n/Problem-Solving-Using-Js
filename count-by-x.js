/* Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ). */

function countBy(x, n) {
    //solution 1 using for loop
    /* let newArray = []
        for (let i = 1; i <= n; i++) {
            newArray.push(i * x)
        }
        return newArray */

    //another solution
    return [...Array(n)].map((_, indx) => ++indx * x);
}
console.log(countBy(1, 10));
