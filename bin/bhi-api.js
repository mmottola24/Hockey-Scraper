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
    
    case 'create' :
    case 'c':
        var argument = args.shift();
        var options = parseOptions(args);
        
        // call library to performs task
        apiLib.create(argument, options);
        break;
    
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

function parseOptions() {
    if (args.length > 0) {
        var options = {};
        
        // loop through args until there is none left
        while ((arg = args.shift())) {
            
            // if first char is a dash than option is valid
            if (arg.charAt(0) == '-') {
                var option = arg.replace('-','');
                var value = args.shift();
                
                switch (option) {
                    case 'l' :
                        options['leage_id'] = value;
                        break;
                    case 't' :
                        options['team_id'] = value;
                        break;
                }
            }          
        }
        
        return options;
    } else {
        return {};
    }
}



