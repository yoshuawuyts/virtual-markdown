const toVdom = require('remark-vdom')
const remark = require('remark')
const assert = require('assert')

module.exports = virtualMarkdown

// Markdown widget for virtual-dom
// (str, obj?) -> obj
function virtualMarkdown (markdown, opts) {
  opts = opts || {}

  assert.equal(typeof markdown, 'string', 'markdown should be a string')
  assert.equal(typeof opts, 'object', 'opts should be an object')

  opts.use = opts.use || []
  const plugins = Array.isArray(opts.use) ? opts.use : [ opts.use ]
  plugins.push(toVdom)
  const processor = loadPlugins(plugins)

  return processor.process(markdown)
}

function loadPlugins (plugins) {
  return plugins.reduce(function (processor, plugin) {
    if (Array.isArray(plugin)) {
      return processor.use(plugin[0], plugin[1])
    }
    return processor.use(plugin)
  }, remark())
}
