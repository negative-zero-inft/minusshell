// you need to make the filename have .app.js for the app to be usable from the CMDLINE

// info about the app, required for it to run

const name = "name"
const desc = "something about the app"
const version = "0.0.0"
const usage = "how to use the app"

// the function that gets executed

const exec = (NZSHHStuff, cb) =>{

    // any libs you might need

    const NZTK = require("../other/NZTK")
    const nztk = new NZTK(name, NZSHHStuff.users.current)
    // const nztk = new NZTK(name, { name: "none", password: "none" })
    /* ↑ uncomment this if you're making for example a login manager, you should also swap the args for just programs ↑ */

    /* ----- REMOVE THIS ASAP BECAUSE WASTE OF SPACE ----- */

    // readline stuff
    // the writable part is so that you can disable stdout when for example entering a password
    // buuut it will also disable rl.question() output so you should reenable it
    // unless you just like abusing console.log()

    const Writable = require('stream').Writable;
    const mutableStdout = new Writable({

        muted: false,
        write: function(chunk, encoding, callback){

            if(!this.muted){

                process.stdout.write(chunk, encoding);
            }
            callback();
        }
    });
    const rl = require('readline').createInterface({

        input: process.stdin,
        output: mutableStdout,
        terminal: true
    })

    // any configs you might need

    const globalConf = require('../configs/globalConf.json')
    
    // the entirety of your code
    
    // the stuff that happens after user input

    const ask = async () =>{

        await nztk.setupPS1(`>`, (data) =>{rl.question(data, (answer) =>{
    
            // the stuff that happens after enter was pressed
    
            nztk.log.normal(answer, 2, 'a')

            // recursivness

            ask()
        })})
    }

    ask()

    // after the readline is closed
    
    rl.on('close', () =>{

        nztk.log.warn('readline was closed', 2, 'a')
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