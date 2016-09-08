var AutoLaunch = require('auto-launch'),
    ringabellAutoLauncher = new AutoLaunch({

      name: 'ringabell',
      path: 'node ./app.js'
    });

module.exports = ringabellAutoLauncher;