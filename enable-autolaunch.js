// automatically launches ringabell when machine starts up
var ringabellAutoLauncher = require('./autolaunch.js');

ringabellAutoLauncher.isEnabled().then( function( enabled ){
  
  if( enabled ) return;

  ringabellAutoLauncher.enable();

  console.log('ringabell enabled!');
});