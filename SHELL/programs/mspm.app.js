// you need to make the filename have .app.js for the app to be usable from the CMDLINE
// i understand that's a lot of boilerplate but eh

// info about the app, required for it to run

const name = "mspm"
const desc = "package manager for minus shell"
const version = "0.0.1"
const usage = "mspm [install/remove/update/refresh/add] [package name/package name///repo address]"

// the function that gets executed

const exec = (NZSHHStuff, cb) =>{

    // any libs you might need

    const NZTK = require('../other/NZTK')
    const nztk = new NZTK(name, NZSHHStuff.users.current)
    const fs = require('fs')
    const MSPMH = require('../other/MSPMH')
    const mspmh = new MSPMH(name, nztk, require('../configs/MSPM/main.json'), cb, NZSHHStuff)

    // any configs you might need

    const globalConf = require('../configs/globalConf.json')
    const mspmConf = require('../configs/MSPM/main.json')

    // the entirety of your code

    const args = NZSHHStuff.input.args

    if(!args[1]) return cb({name: name, exitCode: 1, value: `you need to provide at least one argument`})
    switch(args[1].toLowerCase()){

        case "add":
            return mspmh.add(args)
            break
        
        case "a":
            return mspmh.add(args)
            break

        case "refresh":
            return mspmh.refresh()
            break

        case "r":
            return mspmh.refresh()
            break

        case "i":
            return mspmh.install(args[2], cb)
            break

        case "install":
            return mspmh.install(args[2], cb)
            break

        default: 
            return cb({name: name, exitCode: 1, value: "you can only use [install/remove/update/refresh/add] (or [i/u/r/a])"})
    }
}

// export the app

module.exports = {name: name, desc: desc, version: version, usage: usage, run: exec}