const userServer = require('./user')

const startServers = async (app) => {
  await Promise.all([userServer.start()])
  userServer.applyMiddleware({ app, path: '/gql/user' })
}

module.exports = startServers
