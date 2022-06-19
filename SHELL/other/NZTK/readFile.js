module.exports = (file, cb, app, user) =>{

    const fs = require('fs')
    const NZTK = require('../NZTK')
    const nztk = new NZTK(app, user)
    fs.readFile(file, (err, data) =>{

        cb(data, err)
        if(!err){

            nztk.log.success(`successfully read from ${file}`, 1, 'read')
        }
    })
}