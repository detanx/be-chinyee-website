const cron = require('node-cron')
const crypto = require('crypto')

function executeTask() {
  process.env.SEREAT_KEY = crypto.randomBytes(32).toString('hex')
}
executeTask()
// 0：分钟，表示在每小时的 0 分钟时执行任务。
// 0：小时，表示在午夜时执行任务。
// 1：日期，表示每个月的第一天。
// */6：月份，表示每六个月执行一次任务。
// *：星期几，表示任何星期都会执行任务。
cron.schedule('0 0 1 */6 *', () => {
  executeTask()
})
