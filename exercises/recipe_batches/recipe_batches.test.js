const batches = require('./recipe_batches.js')

test('function batches exists', () => {
  expect(typeof batches).toEqual('function')
})

test('batches correctly identifies 0 when not enough of something', () => {
  const nBatches = batches(
    { milk: 100, butter: 50, flour: 5 },
    { milk: 132, butter: 48, flour: 51 },
  )

  expect(nBatches).toEqual(0)
})

test('batches correctly identifies 0 when missing ingredient', () => {
  const nBatches = batches(
    { milk: 100, flour: 4, sugar: 10, butter: 5 },
    { milk: 1288, flour: 9, sugar: 95 },
  )

  expect(nBatches).toEqual(0)
})

test('batches correctly identifies one batch can be made', () => {
  const nBatches = batches(
    { milk: 100, butter: 50, cheese: 10 },
    { milk: 198, butter: 52, cheese: 10 },
  )

  expect(nBatches).toEqual(1)
})

test('batches correctly identifies two batches can be made', () => {
  const nBatches = batches(
    { milk: 2, sugar: 40, butter: 20 },
    { milk: 5, sugar: 120, butter: 500 },
  )

  expect(nBatches).toEqual(2)
})
