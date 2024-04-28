const catchDeal = () => {
  return async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      ctx.status = err.code || 500 // 设置响应状态码
      ctx.body = err // 设置响应体
    }
  }
}

module.exports = catchDeal
