module.exports = (fileOrDir, app, user, cb) =>{

    const NZTK = require('../NZTK')
    const nztk = new NZTK(app, user)

    const fs = require('fs')
    
    // remove a dir

    const removeDir = (dir) =>{

        if (fs.existsSync(dir)){

            const files = fs.readdirSync(dir)
        
            if(files.length > 0){

                files.forEach((filename) =>{

                if(fs.statSync(dir + "/" + filename).isDirectory()){

                    removeDir(dir + "/" + filename)
                }else{
                    
                    fs.unlinkSync(dir + "/" + filename)

                    nztk.log.success(`removed ${filename}`, 1, 'removedir')
                }
            })
            fs.rmdirSync(dir)
            }else{

                fs.rmdirSync(dir)
                nztk.log.success(`removed ${dir}`, 1, "removedir")
            }
        }else{

            nztk.log.success(`${dir} doesn't exist`, 2, "nope")
        }
    }

    if(!fs.existsSync(fileOrDir)){

        return cb()
    }
    if(fs.lstat(fileOrDir, (e, stats) =>{

        if(e) return nztk.log.error(e, 1, 'remove')
        return stats.isFile()
    })){

        fs.unlink(fileOrDir, (e) =>{

            cb(e)
        })
    }else{

        removeDir(fileOrDir)
    }
}