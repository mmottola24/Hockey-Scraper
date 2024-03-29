var Scrap       = require('Scrap'),
    jsdom       = require('jsdom'),
    fs          = require('fs'),
    calParse    = require('../cal-parse');

var schedule = function() {
    
    this.init = function(options) {
        
        var leagueId = options.league_id,
            teamId = options.team_id,
            outputDir = options.output_dir || './data';
            
        if (!leagueId) {
            console.log('League Id is require to generate schedule');
            process.exit(1);
        }
        
        // User Scrap to visit this page
        // http://bhistc.goalline.ca/create_Ical_league.php?from_ym=201206&to_ym=201306&league_id=1805&team_id=316350
        // use league_id and team_id options
        var url = 'http://bhistc.goalline.ca';
        var route1 = '/create_Ical_league.php?from_ym=201206&to_ym=201306&league_id=' + leagueId;
        
        if (teamId) {
            route1 += '&team_id=' + teamId;
        }
        
        var route2 = ''; // second url, used to get schedule
        
        jsdom.env({
            html: url + route1,
            scripts: [
              'http://code.jquery.com/jquery-1.5.min.js'
            ],
            done: function(errors, window) {
                var $ = window.$;
                $('#pg_content a:first').each(function() {
                  route2 = $(this).attr('href');
                });
                
                var page = new Scrap({
                    path: url
                });
                  
                page.get(route2, { type: 'string' }, function(contents) {
                    parser = new calParse();
                    var json = parser.parse(contents, function(events) {
                        var filename = outputDir + '/schedule_' + leagueId;
                        if (teamId) {
                            filename += '_' + teamId;                                
                        }
                        filename += '.json';
                        
                        fs.writeFile(filename, JSON.stringify(events), function(err){
                            if (err) {
                                console.log('Error saving file');
                                process.exit(1);
                            }
                            console.log('Saved file: ' + filename);
                        });
                    });
                });
            }
        });   
    };
}

module.exports = schedule