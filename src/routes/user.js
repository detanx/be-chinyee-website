const Router = require('koa-router')
const { SUCCESS } = require('@constants/response')

const router = new Router({
  prefix: '/user', // 设置前置路由
})

router.post('/info', async (ctx) => {
  const { username, password } = ctx.request.body
  ctx.body = { ...SUCCESS, data: { username, password } }
})

module.exports = router
