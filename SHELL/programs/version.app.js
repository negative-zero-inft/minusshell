// you need to make the filename have .app.js for the app to be usable from the CMDLINE
// i understand that's a lot of boilerplate but eh

// info about the app, required for it to run

const name = "ver"
const desc = "get the version of an app"
const version = "0.0.1"
const usage = "ver [app]"

// the function that gets executed

const exec = (NZSHHStuff, cb) =>{

    // any libs you might need

    const NZTK = require('../other/NZTK')
    const nztk = new NZTK(name, NZSHHStuff.users.current)

    // any configs you might need

    const globalConf = require('../configs/globalConf.json')

    // the entirety of your code

    const args = NZSHHStuff.input.args
    if(!args[1]) return cb({name: name, exitCode: 1, value: "please input what app to get the version of"})
    const app = NZSHHStuff.appStuff.allPrograms.get(args[1])
    if(!app) return cb({name: name, exitCode: 1, value: `app not ${args[1]} found`})
    nztk.log.success(`version of ${args[1]}: ${app.version}`, 2, '')

    // end the program

    return cb({name: name, exitCode: 0, value: "exited the program"})
}

// export the app

module.exports = {name: name, desc: desc, version: version, usage: usage, run: exec}