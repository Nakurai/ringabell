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

    var self = this,
        remainingRings = nb;

    ringBell( ringBellCallback );

    function ringBellCallback(){
      
      remainingRings = remainingRings - 1;

      if( remainingRings < 1 ) return;

      ringBell( ringBellCallback );
    }

    function ringBell( callback ){

      player.play(self.bellPath, function(err){
        if(err) console.log('failed to ring :(');

        if( typeof callback === "function" ) callback();
      });
    }
  }
}

module.exports.ringabell = new RingABell();
