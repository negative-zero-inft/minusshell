// any imports if your lib is beeg brain

const log = require('./NZTK/log')
const setupPS1 = require('./NZTK/setupPS1')
const readFile = require('./NZTK/readFile')

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

        readFile(file, cb, this.appName, this.user)
    }
}
// test function

const test = (a) =>{

    // show off your lib in a creative way
}

// export the lib
// i usually put a class here

module.exports = NZTK

// when running the file itself

test(process.argv)