// you need to make the filename have .app.js for the app to be usable from the CMDLINE

// info about the app, required for it to run

const name = "echo"
const desc = "echo something (used for testing nztk)"
const version = "0.0.1"
const usage = "echo [normal/warn/error/critError/success] [something to echo]"

// the function that gets executed

const exec = (NZSHHStuff, cb) =>{

    // any libs you might need

    const NZTK = require("../other/NZTK")
    const nztk = new NZTK(name, NZSHHStuff.users.current)
    // const nztk = new NZTK(name, { name: "none", password: "none" })

    // any configs you might need

    const globalConf = require('../configs/globalConf.json')

    // the entirety of your code

    const args = NZSHHStuff.input.args

    if(!args[1]) return cb({name: name, exitCode: 1, value: "please input the type of log"})

    // delicious boilerplate amirite

    switch(args[1].toLowerCase()){

        case "normal":
            if(!args[2]) return cb({name: name, exitCode: 1, value: "please input what i'm supposed to echo"})
            nztk.log.normal(args[2], 2, '')
            break

        case "warn":
            if(!args[2]) return cb({name: name, exitCode: 1, value: "please input what i'm supposed to echo"})
            nztk.log.warn(args[2], 2, '')
            break

        case "error":
            if(!args[2]) return cb({name: name, exitCode: 1, value: "please input what i'm supposed to echo"})
            nztk.log.error(args[2], 2, '')
            break

        case "critError":
            if(!args[2]) return cb({name: name, exitCode: 1, value: "please input what i'm supposed to echo"})
            nztk.log.critError(args[2], 2, '')
            break

        case "success":
            if(!args[2]) return cb({name: name, exitCode: 1, value: "please input what i'm supposed to echo"})
            nztk.log.success(args[2], 2, '')
            break

        default:
            return cb({name: name, exitCode: 1, value: 'the type of log can only be normal/warn/error/critError/success'})
    }

    // end end the program

    cb({

        name: name,
        exitCode: 0,
        value: {

            something: "bruh"
        }
    })
}

// export the app to be loadable by -SH

module.exports = {

    name: name,
    desc: desc,
    version: version,
    usage: usage,
    run: exec
}