// any imports if your lib is beeg brain

const add = require('./MSPM/add')
const install = require('./MSPM/install')
const refresh = require('./MSPM/refresh')

// test function

// export the lib
// i usually put a class here

module.exports = class MSPMH{

    constructor(name, nztk, conf, cb, NZSHHStuff){

        this.name = name
        this.nztk = nztk
        this.conf = conf
        this.cb = cb
        this.NZSHHStuff = NZSHHStuff
    }

    add(args){

        add(args, this.name, this.nztk, this.conf, this.cb)
    }

    refresh(){

        refresh(this.nztk, this.name, this.cb, this.conf)
    }

    install(pkg, cb){

        install(pkg, this.nztk, this.name, this.conf, cb, this.NZSHHStuff, this.NZSHHStuff.appStuff.readline)
    }
}
