#!/usr/bin/env node

var bhiAPI = require('../lib/bhi-api'),
    binHelper = require('./bin-helper');

// get arguments from command
var args = process.argv.slice(2);

// ensure command was supplied
if (args.length < 1) {
    binHelper.displayUsage();
}

// initialize bhiAPI lib
var apiLib = new bhiAPI();

// store the command
var command = args.shift();

switch (command) {
    case '-h' :
    case '--help' :
    case 'help' :
        binHelper.displayHelp();
        break;
    case '-v' :
    case '--version':
    case 'version' :
        binHelper.displayVersion(apiLib.version);
        break;
    default :
        binHelper.displayUsage();
        break;
}

// loop through args until there is none left
while (arg = args.shift()) {
    console.log(arg);
    
    
}


