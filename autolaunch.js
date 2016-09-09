var shell = require('shelljs'),
    nodeLocation = shell.which('node');

if( !nodeLocation ) throw new Error( 'path to node executable cannot be found' );

// using a modified version of auto-launch package that allows us to run complex commands for windows
var AutoLaunch = require('./auto-launch'),
    ringabellAutoLauncher = new AutoLaunch({

      name: 'ringabell',
      
      // windows specific -- need to find a way for our mac friends to use this
      path: '"cmd" /c cd ' + process.cwd() + ' && START /MIN "ringabell" "' + nodeLocation + '" app.js',
    });

module.exports = ringabellAutoLauncher;