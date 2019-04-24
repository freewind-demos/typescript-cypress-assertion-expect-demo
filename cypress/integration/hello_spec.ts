import {add} from '../../add';

describe('cypress', () => {
  describe('assertions', () => {
    it('provides expect', () => {
      expect(add(2, 3)).to.equal(5);
    })
  })
})
