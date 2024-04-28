const Router = require('koa-router')
const User = require('@schema/user')
const { createToken } = require('@utils/tokenOpt')
const { SUCCESS, PARAM_ERROR } = require('@constants/response')

const router = new Router()

router.post('/login', async (ctx) => {
  const { username, password } = ctx.request.body
  const user = await User.findOne({ username, password })
  if (user) {
    const token = createToken(user)
    ctx.body = { ...SUCCESS, data: token }
  } else {
    ctx.throw({
      ...PARAM_ERROR,
      message: 'Invalid username or password',
    })
  }
})

router.post('/register', async (ctx) => {
  const { username, password } = ctx.request.body
  const user = await User.findOne({ username })
  if (user) {
    ctx.throw({
      ...PARAM_ERROR,
      message: username + ' is exsit',
    })
  } else {
    const newUser = new User({
      username,
      password,
    })
    await newUser.save()
    ctx.body = { ...SUCCESS, data: null }
  }
})

module.exports = router
