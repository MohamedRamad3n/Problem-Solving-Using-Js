//Find The Largest Element
//Write a function that takes an array of numbers and returns the largest number in the array.
function findLargestElement(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Example usage:
const numbers = [3, 5, 7, 2, 8, 1];
const largest = findLargestElement(numbers);
console.log(largest); 