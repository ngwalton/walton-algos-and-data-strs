// factorial returns n!
// n is a positive integer
// tried using BigInt for very large numbers, but jest doesn't seem to handle
// this data type yet

function factorial(n) {
  return n < 2 ? 1 : n * factorial(n - 1)
}

// function factorial(n) {
//   let result = 1

//   for (let i = 2; i <= n; i++) {
//     result *= i
//   }

//   return result
// }

// function factorial(n) {
//   return n < 2
//     ? 1
//     : Array(n)
//         .fill(1)
//         .map((one, i) => i + one)
//         .reduce((acc, i) => acc * i, 1)
// }

module.exports = factorial
