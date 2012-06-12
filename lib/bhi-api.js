var bhiAPI = function(options) {
  
  this.version = JSON.parse(require('fs')
                            .readFileSync(require('path')
                            .join(__dirname, '..', 'package.json')))
                            .version;
  
  this.createSchedule = function() {
    
  };
  
  
  
};



module.exports = bhiAPI