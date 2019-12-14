/* eslint-disable no-undef */
import Nightmare from 'nightmare'
import assert from 'assert'
import './helper'

describe('じゃんけんアプリ', () => {
  const nightmare = Nightmare({ show: false })
  const URL = 'http://localhost:8080/'

  it('グーをクリックすると対戦が行われ、対戦結果が表示される', (done) => {
    nightmare
      .goto(URL)
      .touchTap('#btn-guu')
      .getText('tbody td')
      .then((texts) => {
        const [ , human, computer, jugment] = texts
        assert.equal(human, 'グー')
        assert.ok(computer.match(/^(グー|パー|チョキ)$/))
        assert.ok(jugment.match(/^(勝ち|負け|引き分け)$/))
        done()
      })
  })

  it('グーをクリックした後に対戦戦績をクリックすると、対戦成績が表示される', (done) => {
    nightmare
      .goto(URL)
      .touchTap('#btn-guu')
      .click('#tab-status')
      .getText('tbody td')
      .then((texts) => {
        const [win, lose, draw] = texts.map((e) => Number(e))
        assert.ok(win >= 0 && win <= 1)
        assert.ok(lose >= 0 && lose <= 1)
        assert.ok(draw >= 0 && draw <= 1)
        assert.equal(win + lose + draw, 1)
        done()
      })
  })

  it('2回クリックすると、対戦結果が2行表示される', (done) => {
    nightmare
      .goto(URL)
      .touchTap('#btn-guu')
      .touchTap('#btn-guu')
      .getText('tbody tr')
      .then((texts) => {
        assert.equal(texts.length, 2)
        done()
      })
  })
})
