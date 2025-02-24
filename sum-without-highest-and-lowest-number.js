
/* Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).*/
function sumWithoutHeighestAndLowestNumber(array) {
    if (array === null || array === undefined) return 0;
    return array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, current) => acc + current, 0)
    //this code have problem beacuse if arr [1,1,2,3,4,5,6] ==> x!== mth.max remove 1,1 two values
    /*  let maxValue = Math.max(...array);
     let minValue = Math.min(...array);
     let filteredArray = array.filter((x) => x !== maxValue && x !== minValue);
     let newArray = filteredArray.reduce((acc, current) => acc + current, 0); 
     return newArray*/
};

console.log(sumWithoutHeighestAndLowestNumber([6, 2, 1, 8, 10]));
