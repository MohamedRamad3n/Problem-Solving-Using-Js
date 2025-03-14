
/* solution1 */
function monkeyCount(n) {
    return Array.from({ length: n }, (_, i) => i + 1);
}

console.log(monkeyCount(10));

/* solution2 */
function monkeyCount(n) {
    let newArray = [];
    for (let i = 1; i <= n; i++) {
        newArray.push(i)
    }
    return newArray;
}