/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

*/
function countingSheep(array) {
    /*  let counter = 0;
     array.map((sheep) => {
         if (sheep === true) {
             counter++;
         }
     })
     return counter; */
    return array.filter(Boolean).length
}
console.log(countingSheep([
    true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]));
