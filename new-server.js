const Koa = require('koa')
const { ApolloServer, gql } = require('apollo-server-koa')

// 定义 GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// 提供解析器函数来实现 GraphQL schema
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = new Koa()

async function startServers() {
  await Promise.all([server.start()])
  server.applyMiddleware({ app, path: '/gql/hello' })
}

startServers().then(() => {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`),
  )
})
