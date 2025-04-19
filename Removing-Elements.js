/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
*/

function removeEveryOther(arr) {
  /*   let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray; */

  return arr.filter((a, index) => index % 2 === 0);
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));
