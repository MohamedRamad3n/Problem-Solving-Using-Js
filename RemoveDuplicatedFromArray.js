function removeDuplicatedFromArray(array) {
    //one solution
    /*   let duplicatedArray = [];
      let uniqueArray = [];
      for (let i = 0; i < array.length; i++) {
          if (!uniqueArray.includes(array[i])) {
              uniqueArray.push(array[i])
          } else {
              duplicatedArray.push(array[i])
          }
      }
      return  [uniqueArray,duplicatedArray]; */
    //second solution
    let uniqueArray = array.filter((item, index) => array.indexOf(item) === index)
    let duplicatedArray = array.filter((item, index) => array.indexOf(item) !== index)
    return [uniqueArray, duplicatedArray];
}
console.log(removeDuplicatedFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 3, 5, 6, 9,]))