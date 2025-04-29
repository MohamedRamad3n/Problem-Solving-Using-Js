

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(16)); // false
console.log(isPrime(17)); // true
