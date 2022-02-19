import { hello } from '../src/billy'

describe('Billy', () => {
  test('say hello', () => {
    expect(hello()).toEqual('Hello Billy')
  })
})
