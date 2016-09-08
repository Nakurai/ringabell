"use strict";
var ringabell = require('./ringabell.js');

class App{
  /**
  Define all useful variables for this Class
  */
  constructor() {
    ringabell = ringabell.ringabell;
    this.currentTime = new Date();

    this.TEST_TIME = 3000;
    this.HALF_HOUR = 1800000;
    this.HOUR = 3600000;

    var next = this.getMinutesBeforeNext(),
        self = this;

    // next half hour
    setTimeout( function(){

      // initial half-hour ring
      ringabell.ring(1);

      // continue ringing 30 mins into every hour
      setInterval( function(){

        ringabell.ring(1);
      
      }, self.HOUR );

    }, next.half * 60 * 1000 );

    // next hour
    setTimeout( function(){

      // initial half-hour ring

      ringabell.ring( getRings() );

      // continue ringing 30 mins into every hour
      setInterval( function(){

        ringabell.ring( getRings() );
      
      }, self.HOUR );

    }, next.hour * 60 * 1000 );

    function getRings(){

      var now = new Date(),
          hours = now.getHours(),
          rings;

      rings = hours % 12;

      if( rings === 0 ) rings = 12;

      return rings;
    }
  }


  /**
   * 30 mins once
   * 1 hour > rings for x time
   * @return {[type]} [description]
   */
  getMinutesBeforeNext() {
    // 30 mins to 1800 000 milleseconds
    // 1 hour 3600 000 milleseconds

    var next = {},
        now = new Date(),
        current_minute = now.getMinutes();

    if( current_minute <= 30 ){

      next.half = 30 - current_minute;
      next.hour = next.half + 30;
    }

    else {

      next.hour = 60 - current_minute;
      next.half = next.hour + 30; 
    }
    
    return next;
  }

  eventHandler() {
    var n = 1;
    if (this.currentTime.getMinutes() === 0) {
      n = this.currentTime.getHours();
    }
    this.currentTime = new Date();
    this.triggerBell(n);
  }

  /**
   * Ring the bell
   * @param  {Number} n number of times to ring bell
   *
   */
  triggerBell(n){
    // simulate bell ring
    console.log("BELL RING");
    ringabell.ring(n);
  }

}

var app = new App();
