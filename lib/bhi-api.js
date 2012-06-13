var Schedule = require('./bhi-api/schedule');

var bhiAPI = function() {
  
  this.version = JSON.parse(require('fs')
                            .readFileSync(require('path')
                            .join(__dirname, '..', 'package.json')))
                            .version;
  
  // handles logic for create command
  this.create = function(argument, options) {
    switch (argument) {
      case 'schedule' :
        schedule = new Schedule();
        schedule.init(options);
        break;
      default :
        console.log('nothing to do - argument required');
        process.exit(0);
        break;
    }
  };
  
};



module.exports = bhiAPI