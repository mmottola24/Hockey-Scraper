BinHelper =  {
   
   // display the help screen
   displayHelp:  function() {
      var output = [
        "usage: bhi-api <command> [options]",
        "",
        "commands:",
        "  create, c, --create         Series of create functions",
        "  options:",
        "    -",
        "",
        "  version, -v, --version      Displays the current version number",
        "  help, -h, --help            Displays the help your looking at"
      ].join('\n')
      
      console.log(output);
      process.exit(1);
   },
   
   displayVersion: function(version) {
      console.log('version: ' + version);
      process.exit(1);
   },
   
   // display usage message
   displayUsage: function() {
      console.log('usage: bhi-api <command> (args).  bhi-api help for more info');
      process.exit(0);
   }
};

module.exports = BinHelper;