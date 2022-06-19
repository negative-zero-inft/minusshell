module.exports = (file, destination, app, user, cb) =>{

    const NZTK = require('../NZTK')
    const nztk = new NZTK(app, user)
    const fs = require('fs')

    fs.rename(file, destination, (e) =>{

        cb(e)
    })
}