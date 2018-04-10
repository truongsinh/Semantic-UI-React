import normalizeTarget from 'src/lib/eventStack/normalizeTarget'

describe('normalizeTarget', () => {
  describe('document', () => {
    it('returns `document` when it passed as string', () => {
      expect(normalizeTarget('document')
        ).to.equal(document)
    })

    it('returns `document` when `false` passed', () => {
      expect(normalizeTarget(false)
        ).to.equal(document)
    })

    it('returns `document` when it passed', () => {
      expect(normalizeTarget(document)
        ).to.equal(document)
    })
  })

  describe('element', () => {
    it('returns `element` when it passed', () => {
      const element = document.createElement('div')

      expect(normalizeTarget(element)
        ).to.equal(element)
    })
  })

  describe('window', () => {
    it('returns `document` when it passed as string', () => {
      expect(normalizeTarget('window')
        ).to.equal(window)
    })

    it('returns document when it passed', () => {
      expect(normalizeTarget(window)
        ).to.equal(window)
    })
  })
})
