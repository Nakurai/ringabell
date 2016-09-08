"use strict";
var ringabell = require('./ringabell.js');

class App{

  /**
  Define all useful variables for this Class
  */
  constructor() {
    this.bell = ringabell.ringabell;
    this.getMinutesBeforeNext();
  }


  /**
   * 30 mins once
   * 1 hour > rings for x time
   * @return {[type]} [description]
   */
  getMinutesBeforeNext() {
    var now = new Date().now();
    
    now.setHours(now.getHours()+1);

    if(now.getMinutes()>30){

    }
    console.log("test");
  }

  triggerBell(){

  }

}

var app = new App();
