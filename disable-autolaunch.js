// disables autolaunch of ringabell

var ringabellAutoLauncher = require('./autolaunch.js');

ringabellAutoLauncher.isEnabled().then( function( enabled ){
  
  if( !enabled ) return;

  ringabellAutoLauncher.disable();

  console.log('ringabell disabled!');
});