/*Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times. */

function repeatStr(str, number) {

   return str.repeat(number)
    /*
    let newStr = "";
    for(let i=0;i<number;i++){
        newStr+=str;
    }
    return newStr;
    */
}

console.log(repeatStr(" Hello ", 3));
