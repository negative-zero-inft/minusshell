module.exports = (pkg, nztk, name, conf, cb, NZSHHStuff, rl, runningAsDependency) =>{

    const repo = require('../../configs/MSPM/repo.json')
    const shell = require('shelljs')
    var found = false
    repo.find((o, n) =>{

        if(o.name === pkg){

            found = true
        }

        if(found){

            nztk.log.success(`found the package ${pkg}`, 1, 'install')
            const a = shell.exec(`git clone ${o.address} ./SHELL/temp/MSPM/`)
            if(!require(`../../temp/MSPM/${pkg}/install.js`).run) return cb({name: name, exitCode: 1, value: `the package ${pkg} does not have a valid install script`})
            const pkgInstaller = require(`../../temp/MSPM/${pkg}/install.js`)
            nztk.log.normal(`starting the installer for ${pkgInstaller.name}`, 1, 'install')
            pkgInstaller.run({

                users: {

                    current: NZSHHStuff.users.current,
                    all: NZSHHStuff.users.all
                },
                appStuff: {

                    apps: NZSHHStuff.appStuff.apps,
                    programs: NZSHHStuff.appStuff.programs,
                    readline: rl
                }
            }, (data) =>{
                
                // shhh
                
                if(!runningAsDependency) nztk.remove(`./SHELL/temp/MSPM/`, (e) =>{

                    if(e) return cb({name: name, exitCode: 1, value: e})

                    if(data.exitCode > 0){

                        return cb({name: `${data.name} run by ${name}`, exitCode: 1, value: data.value})
                    }else{
    
                        return cb({name: `${data.name} run by ${name}`, exitCode: 0, value: data.value})
                    }
                })
            })
        }

        if(!found && n === repo.length - 1){

            return cb({name: name, exitCode: 1, value: pkg ? `couldn't find the package ${pkg}. maybe try refresh?` : `please input the package name`})
        }
    })
    // return cb({name: name, exitCode: 0, value: `installed the package ${pkg}`})
}