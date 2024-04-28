require('module-alias/register')
require('dotenv').config()
require('@utils/createSecretKey')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const loginRouter = require('@routes/login')
const userRouter = require('@routes/user')
const authenticate = require('@utils/authenticate')
const { connect, disconnect } = require('@utils/mongoose')
const startServers = require('@servers')
const config = require('@config')
const middlewareInit = require('@middlewares')

const app = new Koa()
connect()

middlewareInit(app)
app.use(bodyParser())
app.use(loginRouter.routes(), loginRouter.allowedMethods())
app.use(authenticate)
app.use(userRouter.routes(), userRouter.allowedMethods())

startServers(app).then(() => {
  const PORT = config.PORT || 3000
  app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`),
  )
})
app.on('close', () => {
  disconnect()
})
process.on('exit', () => {
  disconnect()
})
