module.exports = (fileOrDir, app, user, cb) =>{

    const NZTK = require('../NZTK')
    const nztk = new NZTK(app, user)
    const rimraf = require('rimraf')

    const fs = require('fs')

    if(!fs.existsSync(fileOrDir)) return cb()

    rimraf(fileOrDir, (e) =>{

        cb(e)
    })
}