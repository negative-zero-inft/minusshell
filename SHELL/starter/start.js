// libs

const fs = require('fs')
const NZTK = require('../other/NZTK')
const notuser = { name: "no" }
const nztk = new NZTK("start", notuser)

// make a temp folder because

if(!fs.existsSync('./SHELL/temp')){

    fs.mkdir('./SHELL/temp', (e) =>{

        if(e) nztk.log.error(e, 1, 'start')
    })
}

// load configs

const globalConf = require(`../configs/globalConf.json`)

// make a map with all programs

const programs = new Map()

// try and catch because yes

try{
    
    const cmds = fs.readdirSync(`./SHELL${globalConf.programs.path}`).filter(file => file.endsWith(`.js`));
    for(const file of cmds){

        const cmd = require(`..${globalConf.programs.path}/${file}`);
            
        nztk.log.success(`found program ${cmd.name}`, 2, "start")
    
        programs.set(cmd.name, cmd)
    }
}catch(err){

    nztk.log.critError(`couldn't load programs.`, 1, 'start')
}

try{

    programs.get(`${globalConf.defaults.loginManager.name}`).run(programs)
}catch(err){

    nztk.log.critError(`couldn't find the login manager`, 1, 'start')
}