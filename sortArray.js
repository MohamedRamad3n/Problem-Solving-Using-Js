/* function sort(arr) {
    if (Array.isArray(arr) && arr.length > 0) {
        return arr.sort((a, b) => a - b);
    }
    return "Invalid input: Please provide a non-empty array of numbers.";
}

// Example usage:
const numbers = [5, 3, 8, 1, 2];
const sortedNumbers = sort(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8] */
//without using sort method
function sort(arr) {
    if (Array.isArray(arr) && arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }
}
// Example usage:
const numbers = [5, 3, 8, 1, 2];
const sortedNumbers = sort(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8]
