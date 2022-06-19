const critError = require('./log/critError')
const error = require('./log/error')
const normal = require('./log/normal')
const success = require('./log/success')
const warn = require('./log/warn')

module.exports = {

    normal: normal,
    warn: warn,
    error: error,
    critError: critError,
    success: success
}