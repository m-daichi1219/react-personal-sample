/* eslint-disable no-undef */
import Nightmara from 'nightmare'
import assert from 'assert'

describe('じゃんけんアプリ', () => {
  const nightmare = Nightmara({ show: false })

  it('アクセスすると「じゃんけん ポン！」と表示されている', (done) => {
    nightmare
      .goto('http://localhost:8080/')
      .evaluate(() => {
        return document.querySelector('h1').innerText
      })
      .then((title) => {
        assert.equal(title, 'じゃんけん ポン！')
        done()
      })
  })
})