const { verifyToken } = require('@utils/tokenOpt')
const { UNAUTHORIZED, PARAM_ERROR } = require('@constants/response')

const authenticate = async (ctx, next) => {
  const { authorization } = ctx.headers
  if (!authorization) {
    ctx.throw({
      ...PARAM_ERROR,
      message: 'Authentication token is required',
    })
  }
  if (authorization && authorization.startsWith('Bearer ')) {
    try {
      const token = authorization.substring(7)
      ctx.token = token
      const decodedInfo = await new Promise((resolve, reject) => {
        verifyToken(ctx, token, resolve, reject)
      })
      ctx.userInfo = decodedInfo
    } catch (error) {
      ctx.throw(UNAUTHORIZED)
    }
    await next()
  } else {
    ctx.throw(UNAUTHORIZED)
  }
}

module.exports = authenticate
