BinHelper =  {
   
   // display the help screen
   displayHelp:  function() {
      var output = [
        "usage: bhi-api <command> <argument> [options[]]",
        "",
        "commands:",
        "  create, c, --create         Series of create functions",
        "  arguments:",
        "    schedule                  Generates schedule.",
        "    options:",
        "      -l, --league            League Id",
        "      -t, --team              Team Id",
        "",
        "  version, -v, --version      Displays the current version number",
        "  help, -h, --help            Displays the help your looking at"
      ].join('\n')
      
      console.log(output);
      process.exit(0);
   },
   
   displayVersion: function(version) {
      console.log('version: ' + version);
      process.exit(0);
   },
   
   // display usage message
   displayUsage: function() {
      console.log('usage: bhi-api <command> [argument] [options[]].  bhi-api help for more info');
      process.exit(0);
   }
};

module.exports = BinHelper;