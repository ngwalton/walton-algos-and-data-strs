// factorial returns n!
// n is a positive integer
// tried using BigInt for very large numbers, but jest doesn't seem to handle
// this data type yet
function factorial(n) {
  let result = 1

  for (let i = 1; i <= n; i++) {
    result *= i
  }

  return result
}

module.exports = factorial
