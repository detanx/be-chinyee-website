const catchDeal = require('./catchDeal')
const pathPrefix = require('./pathPrefix')
const middlewareInit = (app) => {
  app.use(catchDeal())
  app.use(pathPrefix(process.env.GLOBAL_ROUTER_PREFIX))
}

module.exports = middlewareInit
