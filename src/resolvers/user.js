const axios = require('axios')

const resolvers = {
  Query: {
    hello: () => 'hellos',
  },

  Mutation: {
    posts: async (_, { id }, context) => {
      try {
        // 发送请求到其他服务获取数据
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        )
        const response1 = await axios.get(`http://localhost:4000/`, id)

        console.log('__', context)
        // 返回请求到的数据
        return {
          hello: response1.data,
          post: response.data,
        }
      } catch (error) {
        throw new Error('Failed to fetch posts')
      }
    },
  },
}
module.exports = resolvers
