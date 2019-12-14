/* eslint-disable no-undef */
import assert from 'assert'
import Jyanken from '../src/Jyanken'

describe('Jyanken' ,() => {
  const jyanken = new Jyanken()

  describe('勝敗の判定が正しいか', () => {
    describe('コンピューターがグーの場合', () => {
      it('人間がグーなら引き分け', () => {
        jyanken.pon(0, 0)
        assert.equal(jyanken.getScore()[0].judgment, 0)
      })

      it('人間がチョキなら負け', () => {
        jyanken.pon(1, 0)
        assert.equal(jyanken.getScore()[0].judgment, 2)
      })

      it('人間がパーなら勝ち', () => {
        jyanken.pon(2, 0)
        assert.equal(jyanken.getScore()[0].judgment, 1)
      })
    })

    describe('コンピューターがチョキの場合', () => {
      it('人間がグーなら負け', () => {
        jyanken.pon(0, 1)
        assert.equal(jyanken.getScore()[0].judgment, 1)
      })

      it('人間がチョキなら負け', () => {
        jyanken.pon(1, 1)
        assert.equal(jyanken.getScore()[0].judgment, 0)
      })

      it('人間がパーなら勝ち', () => {
        jyanken.pon(2, 1)
        assert.equal(jyanken.getScore()[0].judgment, 2)
      })
    })

    describe('コンピューターがパーの場合', () => {
      it('人間がグーなら負け', () => {
        jyanken.pon(0, 2)
        assert.equal(jyanken.getScore()[0].judgment, 2)
      })

      it('人間がチョキなら負け', () => {
        jyanken.pon(1, 2)
        assert.equal(jyanken.getScore()[0].judgment, 1)
      })

      it('人間がパーなら勝ち', () => {
        jyanken.pon(2, 2)
        assert.equal(jyanken.getScore()[0].judgment, 0)
      })
    })
  })
})
