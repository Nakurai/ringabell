"use strict";
var child_process = require('child_process');

class RingABell{

  /**
  Define all useful variables for this Class
  */
  constructor() {
    this.mPlayerPath = __dirname+'\\mplayer\\mplayer.exe';
    this.bellPath = './bells/bell.mp3';
  }

  /**
  ring the belle as many times as define in the parameter
  */
  ring(nb){
    for(var cpt=0; cpt<nb; cpt++){
      child_process.execSync(this.mPlayerPath+' '+this.bellPath);
    }
    return true;
  }
}

module.exports.ringabell = new RingABell();
