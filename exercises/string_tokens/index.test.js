const tokenize = require('./index.js')

test('tokenize function is defined', () => {
  expect(tokenize).toBeDefined()
})

test('Calling tokenize with `Hello world!` prints out 3 statements', () => {
  tokenize('Hello world!')

  expect(console.log.mock.calls).toHaveLength(3)
})

test('Calling tokenize with `s` prints out the correct values', () => {
  const s = "He is a very very good boy, isn't he?"
  tokenize(s)

  expect(console.log.mock.calls[0][0]).toEqual(10)
  expect(console.log.mock.calls[1][0]).toEqual('He')
  expect(console.log.mock.calls[2][0]).toEqual('is')
  expect(console.log.mock.calls[3][0]).toEqual('a')
  expect(console.log.mock.calls[4][0]).toEqual('very')
  expect(console.log.mock.calls[5][0]).toEqual('very')
  expect(console.log.mock.calls[6][0]).toEqual('good')
  expect(console.log.mock.calls[7][0]).toEqual('boy')
  expect(console.log.mock.calls[8][0]).toEqual('isn')
  expect(console.log.mock.calls[9][0]).toEqual('t')
  expect(console.log.mock.calls[10][0]).toEqual('he')
  expect(console.log.mock.calls).toHaveLength(11)
})

test('tokenize prints out the correct values with embedded numbers', () => {
  const s = 'Happy, happy1, j0y, j0y!'
  tokenize(s)

  expect(console.log.mock.calls[0][0]).toEqual(6)
  expect(console.log.mock.calls[1][0]).toEqual('Happy')
  expect(console.log.mock.calls[2][0]).toEqual('happy')
  expect(console.log.mock.calls[3][0]).toEqual('j')
  expect(console.log.mock.calls[4][0]).toEqual('y')
  expect(console.log.mock.calls[5][0]).toEqual('j')
  expect(console.log.mock.calls[6][0]).toEqual('y')
  expect(console.log.mock.calls).toHaveLength(7)
})

beforeEach(() => {
  jest.spyOn(console, 'log')
})

afterEach(() => {
  console.log.mockRestore()
})
