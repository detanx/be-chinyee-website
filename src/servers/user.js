const { ApolloServer } = require('apollo-server-koa')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const userTypeDefs = require('@typeDefs/user')
const userResolvers = require('@resolvers/user')

const schema = makeExecutableSchema({
  typeDefs: userTypeDefs,
  resolvers: userResolvers,
})

const server = new ApolloServer({
  schema,
  context: ({ ctx }) => {
    const { token, userInfo } = ctx
    console.log('authorization', token, userInfo)
  },
})

module.exports = server
