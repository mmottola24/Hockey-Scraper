var jsdom   = require('jsdom'),
    fs      = require('fs');

var standings = function() {
    
    this.init = function(options) {
        var leagueId = options.league_id,
            scheduleId = options.schedule_id,
            outputDir = options.output_dir || './data';
            
        if (!leagueId) {
            console.log('League Id is require to generate schedule');
            process.exit(1);
        }
        
        var url = 'http://bhistc.goalline.ca';
        var route1 = '/standings.php?league_id=' + leagueId;
        
        if (scheduleId) {
            route1 += '&schedule_id=' + scheduleId;
        }
        
        jsdom.env({
            html: url + route1,
            scripts: [
                'http://code.jquery.com/jquery-1.5.min.js'
            ],
            done: function(errors, window) {
                var $ = window.$,
                    headers = [],
                    standings = {};
                
                $('.standings_header td').each(function(index) {
                    if (index == 0) {
                        headers.push('Team');
                    } else {
                        headers.push($(this).html());
                    }
                });
                
                standings['headers'] = headers;
                standings['teams'] = [];
                
                $('.standings_table tr').each(function(index) {
                    if (index != 0) {
                        var team = {};
                        $(this).find('td').each(function(index2) {
                            if (index2 == 0) {
                                var a = $(this).find('a');
                                var id = a.attr('href');
                                var name = a.html();
                                
                                team['team_id'] = id.slice((id.indexOf('=') + 1), id.indexOf('&'));
                                team['team_name'] = name.replace('<br />','').replace('<br>','').replace('\r\n','');
                            } else {
                                team[headers[index2]] = $(this).html();
                            }
                        });
                        standings['teams'].push(team);
                    }
                }); 
                
                var filename = outputDir + '/standings_' + leagueId;
                if (scheduleId) {
                    filename += '_' + scheduleId;                                
                }
                filename += '.json';
                
                fs.writeFile(filename, JSON.stringify(standings), function(err){
                    if (err) {
                        console.log('Error saving file');
                        process.exit(1);
                    }
                    console.log('Saved file: ' + filename);
                });
                
            }
        });
        
        
        
    }
}   

module.exports = standings;