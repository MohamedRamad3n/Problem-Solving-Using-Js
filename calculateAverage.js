//Write a function which calculates the average of the numbers in a given array.

//Note: Empty arrays should return 0.
function findAverage(array) {
    return array.length === 0 ? 0 : array.reduce((acc, num) => acc + num, 0) / array.length
}

console.log(findAverage([1, 2, 3, 4, 5])); //3
