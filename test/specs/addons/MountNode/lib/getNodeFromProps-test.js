import getNodeFromProps from 'src/addons/MountNode/lib/getNodeFromProps'
import isBrowser from 'src/lib/isBrowser'

describe('getNodeFromProps', () => {
  describe('browser', () => {
    it('returns node when it defined', () => {
      getNodeFromProps({ node: 'foo' })
        .should.equal('foo')
    })

    it('returns document.body by default', () => {
      expect(getNodeFromProps({})).to.equal(document.body)
    })
  })

  describe('browser', () => {
    beforeEach(() => {
      isBrowser.override = false
    })

    afterEach(() => {
      isBrowser.override = null
    })

    it('always returns null', () => {
      expect(getNodeFromProps({ node: 'foo' }))
        .to.be.a('undefined')
      expect(getNodeFromProps({ }))
        .to.be.a('undefined')
    })
  })
})
