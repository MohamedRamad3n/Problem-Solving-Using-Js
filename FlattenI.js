//Write a Function to Flatten a multi-dimensional array into single-level array

//[1, [2, [3, 4], 5], 6]
function flattenArray(value) {
    const result = [];
    function Flatten(item) {
        if (Array.isArray(item)) {
            for (let el of item) {
                Flatten(el)
            }
        } else {
            result.push(item)
        }
    }
    Flatten(value)
    return result;
}

console.log(flattenArray([1, [2, [3, 4], 5], 6]))