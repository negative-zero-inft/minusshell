module.exports = (nztk, name, cb, conf) =>{

    const noncache = (module) =>{

        require("fs").watchFile(require("path").resolve(module), () =>{
    
            delete require.cache[require.resolve(module)]
        })
    }
    const shell = require('shelljs')
    const fs = require('fs')
    var packages = []

    conf.repos.forEach((r, n) => {
        
        nztk.remove('./SHELL/temp/MSPM', (e) =>{

            shell.exec(`git clone ${r} ./SHELL/temp/MSPM`)
            noncache('../../temp/MSPM/packages.json')
            const newPKGS = require('../../temp/MSPM/packages.json')
            packages = packages.concat(...newPKGS)
            nztk.remove('./SHELL/temp/MSPM', (e) =>{})
        })

        if(n === conf.repos.length - 1){

            if(packages.length < 1){

                nztk.log.warn(`you need to rerun mspm refresh because of one stupid bug i literally cannot fix`, 2, '')
            }
            fs.writeFile(`./SHELL/configs/MSPM/repo.json`, JSON.stringify(packages), (err) =>{

                if(err) return cb({name: name, exitCode: 1, value: err})
                else cb({name: name, exitCode: 0, value: ''})
            })
        }
    });
}