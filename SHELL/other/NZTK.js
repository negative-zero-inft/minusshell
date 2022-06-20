// any imports if your lib is beeg brain

const log = require('./NZTK/log')
const setupPS1 = require('./NZTK/setupPS1')
const rf = require('./NZTK/readFile')
const mf = require('./NZTK/moveFile')
const rm = require('./NZTK/remove')
const cp = require('./NZTK/copy')

// the lib itself

class NZTK{

    constructor(appName, user){
        
        this.appName = appName
        this.user = user
    }

    log ={

        normal: (toLog, loudness, file) =>{log.normal(toLog, loudness, file, this.appName, this.user)},
        warn: (toLog, loudness, file) =>{log.warn(toLog, loudness, file, this.appName, this.user)},
        error: (toLog, loudness, file) =>{log.error(toLog, loudness, file, this.appName, this.user)},
        critError: (toLog, loudness, file) =>{log.critError(toLog, loudness, file, this.appName, this.user)},
        success: (toLog, loudness, file) =>{log.success(toLog, loudness, file, this.appName, this.user)},
    }

    setupPS1(toSetup, cb){

        setupPS1(toSetup, this.user.name, cb)
    }

    readFile(file, cb){

        rf(file, cb, this.appName, this.user)
    }

    moveFile(file, destination, cb){

        mf(file, destination, this.appName, this.user, cb)
    }

    remove(fileOrDir, cb){

        rm(fileOrDir, this.appName, this.user, cb)
    }

    copy(file, destination, cb){

        cp(file, destination, this.appName, this.user, cb)
    }
}

// export the lib
// i usually put a class here

module.exports = NZTK