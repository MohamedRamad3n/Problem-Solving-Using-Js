function CountOfPositivesAndSumOfNegative(array) {
    //solution1
    /*  let positiveNum = [];
     let totalNum = 0;
     for (let i = 0; i < array.length; i++) {
      if (!array || array.length === 0) return [];
         if (array[i] > 0) {
             positiveNum.push(array[i])
         } else {
             totalNum += array[i];
         }
     }
     return [positiveNum.length, totalNum] */

    //solution2
    if (!array || array.length === 0) return [];
    let positivesArray = array.filter((num) => num > 0).length;
    let sumOfNegative = array.filter((num) => num < 0).reduce((acc, current) => acc + current, 0);
    return [positivesArray, sumOfNegative]
}
console.log(CountOfPositivesAndSumOfNegative([0]));
