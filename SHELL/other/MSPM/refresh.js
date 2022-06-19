module.exports = (nztk, name, cb, conf) =>{

    const shell = require('shelljs')
    var packages = []

    conf.repos.forEach(r => {
        
        nztk.remove('./SHELL/temp/MSPM', async (e) =>{

            await shell.exec(`git clone ${r} ./SHELL/temp/MSPM`)
            const newPKGS = await require('../../temp/MSPM/packages.json')
            packages = await packages.concat(...newPKGS)
            await console.log(packages)
            await nztk.remove('./SHELL/temp/MSPM', (e) =>{})
        })
    });

    cb({name: name, exitCode: 0, value: ''})
}