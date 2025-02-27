/*  Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.*/

function toSquareRoot(Array) {
    /*  let newArray = [];
       for (let i = 0; i < Array.length; i++) {
           if (Number.isInteger(Math.sqrt(Array[i]))) {
               newArray.push(Math.sqrt(Array[i]))
           } else {
               newArray.push(Array[i] * Array[i])
           }
       }
       return newArray; */ty

    //solution2
    return Array.map((number) =>
        Number.isInteger(Math.sqrt(number)) ? Math.sqrt(number) : number * number
    );
}
console.log(toSquareRoot([4, 3, 9, 7, 2, 1]));
