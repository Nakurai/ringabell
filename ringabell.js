"use strict";
var player = require('play-sound')();

class RingABell{

  /**
  Define all useful variables for this Class
  */
  constructor() {
    this.bellPath = './bells/bell-short.mp3';
  }

  /**
  ring the belle as many times as define in the parameter
  */
  ring(nb){
    for(var cpt=0; cpt<nb; cpt++){
      player.play(this.bellPath, function(err){
        if(err){
          console.log(err);
        }
        else{
          console.log('bell rang!');
        }
      });
    }
    return true;
  }
}

module.exports.ringabell = new RingABell();
