
module.exports = (path, app, user, cb) =>{
    
    const fs = require('fs')
    const NZTK = require('../NZTK')
    const nztk = new NZTK(app, user)

    fs.mkdir(path,  (e) =>{

        if(!e) nztk.log.success(`made a folder at ${path}`, 1, 'mkdir')
        cb(e)
    })
}