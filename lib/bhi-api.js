var bhiAPI = function(options) {
  
  this.version = JSON.parse(require('fs')
                            .readFileSync(require('path')
                            .join(__dirname, '..', 'package.json')))
                            .version;
  
  // handles logic for create command
  this.create = function(argument, options) {
    switch (argument) {
      case 'schedule' :
        this.createSchedule(options);
        break;
      default :
        console.log('nothing to do - argument required');
        process.exit(0);
        break;
    }
  };
  
  this.createSchedule = function(options) {
    // User Scrap to visit this page
    // http://bhistc.goalline.ca/create_Ical_league.php?from_ym=201203&to_ym=201303&league_id=1805&team_id=316350
    // use league_id and team_id options
    
    // click the link to download binary
    
    // parse vcs file into json of events
    
    console.log('create schedule selected');
    
  };
  
  
  
};



module.exports = bhiAPI