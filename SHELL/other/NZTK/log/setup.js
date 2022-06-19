module.exports = (toLog, username, logType, app, bluePrint) =>{

    const blueprint = `${bluePrint}`
    
    const os = require('os')

    var totalmem = os.totalmem()
    var freemem = os.freemem()
            
    totalmem = totalmem / 1000 / 1000 / 1000
    freemem = freemem / 1000 / 1000 / 1000
            
    var freememgb = Math.round(freemem * 1)
    var totalmemgb = Math.round(totalmem * 1)
            
    var cpus = os.cpus()
    var cpumodel = cpus[0].model
    var ostype = os.type
    var cpuarch = os.arch
    var cpuclock = cpus[0].speed
    var hostname = os.hostname

    let date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    
    const finishedproduct = blueprint
    .replace(/'FD'/g, `${date + "-" + month + "-" + year + " " + hours + ":" + minutes + ":" + seconds}`)
    .replace(/'DY'/g, year)
    .replace(/'DD'/g, date)
    .replace(/'DM'/g, month)
    .replace(/'DH'/g, hours)
    .replace(/'DM'/g, minutes)
    .replace(/'DS'/g, seconds)
    .replace(/'N'/g, `\n`)
    .replace(/'FM'/g, freememgb)
    .replace(/'AM'/g, totalmemgb)
    .replace(/'CPUM'/g, cpumodel)
    .replace(/'OSTYPE'/g, ostype)
    .replace(/'CPUARCH'/g, cpuarch)
    .replace(/'CPUCLOCK'/g, cpuclock)
    .replace(/'U'/g, username)
    .replace(/'HN'/g, hostname)
    .replace(/'LT'/g, logType)
    .replace(/'APP'/g, app)
    .replace(/'LOG'/g, toLog)

    return finishedproduct 
}