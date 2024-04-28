const NODE_ENV = process.env.NODE_ENV
let config
if (NODE_ENV === 'dev') {
  config = require('@config/config.dev')
} else if (NODE_ENV === 'test') {
  config = require('@config/config.test')
} else {
  config = require('@config/config.prod')
}

module.exports = config
