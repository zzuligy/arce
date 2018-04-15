import log from './log'

let logTpl = function (msg, type) {
  let TYPE_COLOR_PAIRS = {'warn': 'yellow', error: 'red', print: '#aaa'}
  let bgColor = TYPE_COLOR_PAIRS[type]
  return `[c="font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; color: #fff; font-size: 20px; padding: 15px 20px; background: ${bgColor}; border-radius: 4px; line-height: 100px; text-shadow: 0 1px #000"]${msg}[c]`
}
let logObject = {
  warn: function (msg) {
    let warnString = logTpl(msg, 'warn')
    log(warnString)
  },
  error: function (msg) {
    let warnString = logTpl(msg, 'error')
    log(warnString)
  }
}

export default logObject