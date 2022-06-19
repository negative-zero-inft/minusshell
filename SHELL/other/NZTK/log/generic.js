module.exports = (logObject) =>{
    
    const config = require('../../../configs/logConf.json')
    const fs = require('fs')
    const colors = require('cli-color')
    const setup = require('./setup')
    const msg = setup(logObject.message, logObject.user.name, () =>{

        switch(logObject.type){

            case 0:
                return config.symbols.normal

            case 1:
                return config.symbols.warn

            case 2:
                return config.symbols.error

            case 3:
                return config.symbols.critError

            case 4:
                return config.symbols.success
            
            default: 
                return config.symbols.error
        }
    }, logObject.dir, config.body)

    try{
        
        fs.mkdir(`./SHELL/logs/${logObject.dir}`, (err) =>{
            
            if(err){
    
                fs.mkdir(`./SHELL/logs`, (err) =>{
    
                })
            }
        })
        
        // check if the loudness is 1 or 3, where 1 is only save to hard drive, 2 is log and save and 3 is only show on the screen. no more console.log()!
    
        if(logObject.loudness === 0 || logObject.loudness === 1){
    
            fs.appendFile(`./SHELL/logs/${logObject.dir}/${logObject.file}.txt`, msg + "\n", (err) => {
    
                if(err) console.log(colors.red("an error occured by logging. this may be caused by the target folder not being there, this should fix itself"))
            });
        }
    
        // i like nesting, if you don't then don't look at my code lmao
    
        if(logObject.loudness === 1 || logObject.loudness === 2){
    
            switch(logObject.type){

                case 0:
                    return console.log(msg)

                case 1:
                    return console.log(colors.yellow(msg))

                case 2:
                    return console.log(colors.red(msg))

                case 3:
                    return console.log(colors.redBright(msg))

                case 4:
                    return console.log(colors.green(msg))
                
                default: 
                    return console.log(msg)
            }
        }
    }catch(err){

        console.log(colors.redBright(`CRITICAL ERROR WHEN LOGGING, ${err}`))
    }
    
}