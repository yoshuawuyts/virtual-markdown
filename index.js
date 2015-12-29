const virtualHtml = require('virtual-html')
const remarkHtml = require('remark-html')
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
  plugins.unshift(remarkHtml)
  const processor = loadPlugins(plugins)

  return virtualHtml(processor.process(markdown))
}

function loadPlugins (plugins) {
  return plugins.reduce(function (processor, plugin) {
    plugin = Array.isArray(plugin) ? plugin[0](plugin[1] || {}) : plugin
    return processor.use(plugin)
  }, remark())
}
