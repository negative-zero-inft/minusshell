// data about the package
// the name has to match the package name and folder name used by the repo

const name = 'name'
const desc = 'describe your package'
const version = '0.0.0'
const deps = {}

// the function that actually runs

const exec = (MSPMStuff, cb) =>{

    // any libs

    const NZTK = require('../../../other/NZTK')
    const nztk = new NZTK(`${name} installer`, MSPMStuff.users.current)

    // any configs for some reason

    // all of your code

    nztk.copy(`./SHELL/temp/MSPM/${name}/payload/programs/app.app.js`, `./SHELL/programs/app.app.js`, (e) =>{

        if(e) return cb({name: name, exitCode: 1, value: e})
        
        nztk.copy(`./SHELL/temp/MSPM/${name}/payload/configs/config.json`, `./SHELL/configs/config.json`, (e) =>{

            if(e) return cb({name: name, exitCode: 1, value: e})
            return cb({name: name, exitCode: 0, value: 'installed everything'})
        })
    })
}

// export the installer

module.exports = {

    name: name,
    desc: desc,
    version: version,
    run: exec
}