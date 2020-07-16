
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./mui-rff.cjs.production.min.js')
} else {
  module.exports = require('./mui-rff.cjs.development.js')
}
