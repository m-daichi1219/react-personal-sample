import Nightmare from 'nightmare'

/**
 * Material-UI 0.19以前のRaisedButtonは独自JSでクリック処理を行っているため
 * Nightmareのclick()メソッドでクリックすることができない。
 * そのため、Nightmareの独自API,pluginを定義したヘルパーが必要となる。
 */
Nightmare.action('getTexts', function(selector, done) {
  this.evaluate_now((selector) => {
    return [].slice.call(document.querySelectorAll(selector)).map((e) => e.innerText)
  }, done, selector)
})

export const touchTap = (selector) => {
  return (nightmare) => {
    nightmare
      .mousedown(selector)
      .mouseup(selector)
  }
}
