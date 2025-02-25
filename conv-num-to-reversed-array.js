

function conNumToReversedArray(num) {
    return num
        .toString()
        .split('')
        .reverse()
        .map((n) => Number(n))


}

console.log(conNumToReversedArray(348597));
