# virtual-markdown [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Convert markdown into [virtual-dom][13]. Uses [remark][14] and
[remark-html][17] under the hood.

## Installation
```sh
$ npm install virtual-markdown
```

## Usage
```js
const highlight = require('mdast-highlight')
const md = require('virtual-markdown')

module.exports = render

function render (h) {
  const text = `
    # funky town, get down, get down
    - or how I learned to love the bomb
  `

  return h('section.main', [
    md(text, {
      use: [ highlight ],
      footnotes: true
    })
  ])
}
```

## API
### tree = md(markdown, opts?)
Takes a string of markdown and returns a [virtual-dom widget][12]. Takes the
following options:
- __use:__ array of [remark plugins][15] to use
- all other options are passed directy to [remark.process()][16]

## See Also
- [remark-vdom][18]
- [virtual-widget][12]
- [virtual-dom][13]
- [remark][14]

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/virtual-markdown.svg?style=flat-square
[3]: https://npmjs.org/package/virtual-markdown
[4]: https://img.shields.io/travis/yoshuawuyts/virtual-markdown/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/virtual-markdown
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/virtual-markdown/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/virtual-markdown
[8]: http://img.shields.io/npm/dm/virtual-markdown.svg?style=flat-square
[9]: https://npmjs.org/package/virtual-markdown
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
[12]: https://www.npmjs.com/package/virtual-widget
[13]: https://github.com/Matt-Esch/virtual-dom
[14]: https://github.com/wooorm/remark
[15]: https://github.com/wooorm/remark/blob/master/doc/plugins.md
[16]: https://github.com/wooorm/remark#remarkprocessvalue-options-done
[17]: https://github.com/wooorm/remark-html
[18]: https://github.com/wooorm/remark-vdom
