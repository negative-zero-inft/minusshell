module.exports = (tosetup, username, callback) =>{

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

    // current month
        
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        
    // current year

    let year = date_ob.getFullYear();
        
    // current hours

    let hours = date_ob.getHours();
        
    // current minutes
    
    let minutes = date_ob.getMinutes();
        
    // current seconds

    let seconds = date_ob.getSeconds();
    
    const finishedproduct = tosetup
    .replace(/'FD'/g, `${date + "-" + month + "-" + year + " " + hours + ":" + minutes + ":" + seconds}`)
    .replace(/'DY'/g, year)
    .replace(/'DD'/g, date)
    .replace(/'DM'/g, month)
    .replace(/'DH'/g, hours)
    .replace(/'DM'/g, minutes)
    .replace(/'DS'/g, seconds)
    .replace(/'CT/g, ``)
    .replace(/CT'/g, ``)
    .replace(/'N'/g, `\n`)
    .replace(/'FM'/g, freememgb)
    .replace(/'AM'/g, totalmemgb)
    .replace(/'CPUM'/g, cpumodel)
    .replace(/'OSTYPE'/g, ostype)
    .replace(/'CPUARCH'/g, cpuarch)
    .replace(/'CPUCLOCK'/g, cpuclock)
    .replace(/'U'/g, username)
    .replace(/'HN'/g, hostname)

    callback(finishedproduct)
}