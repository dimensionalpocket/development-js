const { chai, expect, sinon } = require('../')

// This class only exists to be parsed by standardx
// and ensure Babel is being used.
class Dummy {
  test ({ value1, value2 = 2, value3 = null, value4 = {} }) {
    this.v1 = value1
    this.v2 = value2
    this.v3 = value3
    this.v4 = value4?.value5?.value6
  }
}

describe('main require', function () {
  it('exports chai', function () {
    expect(chai).to.exist
  })

  it('exports sinon', function () {
    expect(sinon).to.exist
  })

  // This test only exists so standardx doesn't
  // complain that the Dummy class isn't used.
  it('parses code', function () {
    var dummy = new Dummy()
    dummy.test({ value1: 1, value2: 'not2', value3: 3, value4: { value5: { value6: 4 } } })
    expect(dummy.v1).to.eq(1)
    expect(dummy.v2).to.eq('not2')
    expect(dummy.v3).to.eq(3)
    expect(dummy.v4).to.eq(4)
  })
})
