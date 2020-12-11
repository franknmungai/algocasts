// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {

    let a = 0;
    let b = 1;

    let nth = 1;

    for(let i = 2; i <= n; i++){
        let next = a + b;
        a = b;
        b = next;
        nth = next;
    }
    return nth;
}

console.log(fib(39));


const cache = {};
const fib2 = (n) => {
    if(n < 2) return cache[n];

    cache[n] = fib2(n - 1) + fib2(n - 2);

}
module.exports = fib;
