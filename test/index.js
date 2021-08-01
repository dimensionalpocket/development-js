const { chai, expect, sinon } = require('../')

describe('main require', function () {
  it('exports chai', function () {
    expect(chai).to.exist
  })

  it('exports sinon', function () {
    expect(sinon).to.exist
  })
})
