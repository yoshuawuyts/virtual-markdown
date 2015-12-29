const toHtml = require('vdom-to-html')
const slug = require('remark-slug')
const test = require('tape')

const virtualMarkdown = require('./')

test('should assert input types', function (t) {
  t.plan(2)
  t.throws(virtualMarkdown.bind(null), /string/)
  t.throws(virtualMarkdown.bind(null, '', 123), /object/)
})

test('should return a virtual-dom tree', function (t) {
  t.plan(1)
  const tree = virtualMarkdown('# hello world')
  const html = toHtml(tree)
  t.equal(html, '<h1>hello world</h1>', 'rendered html')
})

test('should accept plugins', function (t) {
  t.plan(1)
  const tree = virtualMarkdown('# hello world', { use: slug })
  const html = toHtml(tree)
  t.equal(html, '<h1 id="hello-world">hello world</h1>', 'rendered html')
})
