const fs = require('fs')
const less = require('postcss-less')
const postcss = require('postcss')

const code = fs.readFileSync('input.less', 'utf8')

postcss([
  require('stylelint')({}),
  require('postcss-reporter')({ clearReportedMessages: true }),
  require('autoprefixer'),
  require('postcss-autoreset')(),
  require('postcss-utilities')(),
  require('postcss-nested'),
  require('postcss-flexbugs-fixes'),
])
  .process(code, {
    from: 'input.less',
    syntax: less,
  })
  .then(() => {})
  .catch((err) => console.error(err.stack))
