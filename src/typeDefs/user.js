const { gql } = require('apollo-server-koa')

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    body: String!
    userId: Int!
    a: String!
  }

  type Res {
    hello: String
    post: [Post]
  }

  type Mutation {
    posts(id: ID): Res
  }
  type Query {
    hello: String
  }
`

module.exports = typeDefs
