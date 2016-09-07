"use strict";
var ringabell = require('./ringabell.js');

class App{

  /**
  Define all useful variables for this Class
  */
  constructor() {
    this.bell = ringabell.ringabell;
    this.getSecondsBeforeNext();
  }

  getMinutesBeforeNext(){
    var now = new Date().now();
    now.setHours(now.getHours()+1);
    if(now.getMinutes()>30){
      var newHour =
    }
    console.log();
  }

  triggerBell(){

  }



}

var app = new App();
