#!/usr/bin/env node

var bhiAPI = require('../lib/bhi-api');

// get arguments from command
var args = process.argv.slice(2);

console.log(args);

if (args.length < 2) {
    console.log('usage: bhi-api <command> (args)');
    process.exit(0);
}

//initialize bhiAPI lib
api = new bhiAPI();
