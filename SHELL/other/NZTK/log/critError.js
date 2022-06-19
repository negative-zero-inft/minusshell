module.exports = (toLog, loudness, file, appName, user) =>{
    
    const generic = require("./generic")
    const colors = require('cli-color')
    generic({dir: appName, file: file, loudness: loudness, message: toLog, user: user, type: 3})
}