const pathPrefix = (prefix) => {
  return async (ctx, next) => {
    ctx.type = 'application/json' // 设置响应内容类型为 JSON
    ctx.request.path = ctx.request.path.replace(prefix, '')
    await next()
  }
}

module.exports = pathPrefix
