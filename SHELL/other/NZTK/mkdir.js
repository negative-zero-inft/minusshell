
module.exports = (path, app, user, cb) =>{
    
    const fs = require('fs')
    const NZTK = require('../NZTK')
    const nztk = new NZTK(app, user)

    fs.mkdir(path,  (e) =>{

        cb(e)
    })
}