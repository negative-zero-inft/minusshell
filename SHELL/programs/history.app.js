// you need to make the filename have .app.js for the app to be usable from the CMDLINE

// info about the app, required for it to run

const name = "history"
const desc = "spit out what you've entered into -SH"
const version = "0.0.1"
const usage = "history"

// the function that gets executed

const exec = (NZSHHStuff, cb) =>{

    // any libs you might need

    const NZTK = require("../other/NZTK")
    const nztk = new NZTK(name, NZSHHStuff.users.current)
    // const nztk = new NZTK(name, { name: "none", password: "none" })

    // any configs you might need

    const globalConf = require('../configs/globalConf.json')

    // the entirety of your code

    nztk.readFile(`./SHELL/logs/MSHSH/history.txt`, (d, e) =>{

        if(!e) nztk.log.normal(d, 2, '')
        else return cb({name: name, exitCode: 1, value: e})
        return cb({

            name: name,
            exitCode: 0,
            value: d
        })
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