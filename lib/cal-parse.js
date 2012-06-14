
var calparse = function() {
    
    var eventStartString = 'BEGIN:VEVENT';
    var eventEndString = 'END:VEVENT';
    
    this.parse = function(content, callback) {
          var events = seperateEvents(content);
          
          callback(events);
    };
    
    seperateEvents = function(content) {
        var events = [];
        
        while (content.indexOf(eventStartString) != -1) {
            var startPos = content.indexOf(eventStartString),
                endPos = content.indexOf(eventEndString),
                section = content.substring(startPos + eventStartString.length, endPos);
                
            content = content.slice(endPos + eventEndString.length);
            
            var fields = section.split('\r\n');
            var event = {};
            
            for (i in fields) {
                var keyPair = fields[i].split(':');
                if (keyPair[0]) {
                    event[keyPair[0]] = keyPair[1];
                }
            }
            
            events.push(event);
        }
        
        return events;
    };
}

module.exports = calparse