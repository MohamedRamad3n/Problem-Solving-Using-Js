//0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987

function memoizedFibonacci() {
  let memo = {};
  return function fib(n) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  };
}
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.time("memoizedFib");
const memoizedFib = memoizedFibonacci();
console.log(memoizedFib(10));
console.timeEnd("memoizedFib");

console.time("notMemoizedFib");
const notMemoizedFib = fib(10);
console.log(notMemoizedFib);
console.timeEnd("notMemoizedFib");
