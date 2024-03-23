const factorial = require('./factorial.js')

test('factorial function is defined', () => {
  expect(factorial).toBeDefined()
})

test('factorial correctly calculates 0!', () => {
  const result = factorial(0)

  expect(result).toEqual(1)
})

test('factorial correctly calculates 1!', () => {
  const result = factorial(1)

  expect(result).toEqual(1)
})

test('factorial correctly calculates 2!', () => {
  const result = factorial(2)

  expect(result).toEqual(2)
})

test('factorial correctly calculates 4!', () => {
  const result = factorial(4)

  expect(result).toEqual(24)
})

test('factorial correctly calculates 10!', () => {
  const result = factorial(10)

  expect(result).toEqual(3628800)
})
