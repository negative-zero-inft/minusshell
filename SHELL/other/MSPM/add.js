module.exports = (args, name, nztk, mspmConf, cb) =>{

    const fs = require('fs')
    if(!args[2]) return cb({name: name, exitCode: 1, value: "please provide the repository to add"})
    if(mspmConf.repos.includes(args[2])){

        return cb({name: name, exitCode: 1, value: "the repo is already there"})
    }else{

        mspmConf.repos.push(args[2])
        fs.writeFileSync('./SHELL/configs/MSPM/main.json', JSON.stringify(mspmConf), (e) =>{

            if(e) return cb({name: name, exitCode: 1, value: `${e}`})
        })
    }
}