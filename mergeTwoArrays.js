function mergeTwoArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
    /*   while (i < arr1.length+1 && j < arr2.length) {
          if (arr1[i] < arr2[j]) {
              mergedArray.push(arr1[i]);
              i++;
          }
          else{
              mergedArray.push(arr2[j])
              j++;
          }
      } */
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray.sort((a, b) => a - b);
}

// Example usage:
const array1 = [2, 4, 6, 8];
const array2 = [1, 3, 5, 7];
const merged = mergeTwoArrays(array1, array2);
console.log(merged);

//also i can concatenate the two arrays and sort them
// const merged = array1.concat(array2).sort((a, b) => a - b);
// console.log(merged);
