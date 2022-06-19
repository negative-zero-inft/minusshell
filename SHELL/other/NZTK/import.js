module.exports = (module) =>{

    require("fs").watchFile(require("path").resolve(module), () =>{

        delete require.cache[require.resolve(module)]
    })
}