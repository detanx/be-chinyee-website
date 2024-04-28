const SUCCESS = {
  code: 200,
  data: null,
  message: 'success',
}
const PARAM_ERROR = {
  code: 400,
  data: null,
  message: 'param error',
}
const UNAUTHORIZED = {
  code: 401,
  data: null,
  message: 'Invalid token',
}
const SERVER_ERROR = {
  code: 500,
  data: null,
  message: 'server error',
}
module.exports = {
  SUCCESS,
  PARAM_ERROR,
  UNAUTHORIZED,
  SERVER_ERROR,
}
