module.exports = (file, destination, app, user, cb) =>{

    const NZTK = require('../NZTK')
    const nztk = new NZTK(app, user)
    const fs = require('fs')

    fs.copyFile(file, destination, (e) =>{

        if(!e) nztk.log.success(`copied ${file} to ${destination}`, 1, 'move')
        cb(e)
    })
}