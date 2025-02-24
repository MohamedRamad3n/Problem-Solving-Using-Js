/*You get an array of numbers, return the sum of all of the positives ones.*/

function positiveNum(arr) {
    return arr.filter(x => x > 0).reduce((acc, current) => acc + current, 0);
    /* for (let i = 0; i < arr.length; i++) {
       if(arr[i]>0){
        initialValue +=arr[i]
       }
    }
    return initialValue; */
}
console.log(positiveNum([1, -4, 7, 12]));
