"use strict";
var ringabell = require('./ringabell.js');

class App{
  // const TESTTIME = 100000;

  /**
  Define all useful variables for this Class
  */
  constructor() {
    this.bell = ringabell.ringabell;
    this.currentTime = new Date();

    this.TEST_TIME = 3000;
    this.HALF_HOUR = 1800000;
    this.HOUR = 3600000;

    this.getMinutesBeforeNext();
  }


  /**
   * 30 mins once
   * 1 hour > rings for x time
   * @return {[type]} [description]
   */
  getMinutesBeforeNext() {
    // 30 mins to 1800 000 milleseconds
    // 1 hour 3600 000 milleseconds
    setTimeout( this.eventHandler, this.TEST_TIME);
  }

  eventHandler() {
    var n = 1;
    if (this.currentTime.getMinutes() === 0) {
      n = this.currentTime.getHours();
    }

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
