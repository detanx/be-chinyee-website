const jwt = require('jsonwebtoken')
// '10s': 十秒
// '30m': 三十分钟
// '1d': 一天
// '2h': 两小时
// '1w': 一周（与 '7d' 等效）
// '2d 6h': 两天六小时
// '1w 3d': 一周三天
const createToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username },
    process.env.SEREAT_KEY,
    { expiresIn: '1d' },
  )
}

const verifyToken = (ctx, token, resolve, reject) => {
  jwt.verify(token, process.env.SEREAT_KEY, (err, decoded) => {
    if (err) {
      reject(err)
    } else {
      const token = createToken(decoded)
      ctx.set('Authorization', `Bearer ${token}`)
      resolve(decoded)
    }
  })
}

module.exports = { createToken, verifyToken }
