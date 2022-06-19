// you need to make the filename have .app.js for the app to be usable from the CMDLINE

// info about the app, required for it to run

const name = "readmem"
const desc = "reads out what you have in the temp -SH memory (dangerous)"
const version = "0.0.1"
const usage = "readmem"

// the function that gets executed

const exec = (NZSHHStuff, cb) =>{

    // any libs you might need

    const NZTK = require("../other/NZTK")
    const nztk = new NZTK(name, NZSHHStuff.users.current)
    // const nztk = new NZTK(name, { name: "none", password: "none" })

    // any configs you might need

    const globalConf = require('../configs/globalConf.json')

    // the entirety of your code

    console.log(NZSHHStuff.appStuff.mem)

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