var Winreg, fs, path, regKey;

fs = require('fs');

path = require('path');

Winreg = require('winreg');

regKey = new Winreg({
  hive: Winreg.HKCU,
  key: '\\Software\\Microsoft\\Windows\\CurrentVersion\\Run'
});

module.exports = {
  regKey: regKey,
  enable: function(opts) {
    return new Promise(function(resolve, reject) {
      var appPath, arg, hiddenArg, updateDotExe, versions;
      appPath = opts.appPath;
      arg = "";
      updateDotExe = path.join(path.dirname(process.execPath), '..', 'update.exe');
      versions = typeof process !== "undefined" && process !== null ? process.versions : void 0;
      if (fs.existsSync(updateDotExe) && versions.electron) {
        appPath = updateDotExe;
        arg = " --processStart \"" + (path.basename(process.execPath)) + "\"";
      }
      hiddenArg = opts.isHiddenOnLaunch ? ' --hidden' : '';
      return regKey.set(opts.appName, Winreg.REG_SZ, appPath + arg + hiddenArg, function(err) {
        if (err != null) {
          return reject(err);
        }
        return resolve();
      });
    });
  },
  disable: function(opts) {
    return new Promise(function(resolve, reject) {
      return regKey.remove(opts.appName, function(err) {
        if (err != null) {
          return reject(err);
        }
        return resolve();
      });
    });
  },
  isEnabled: function(opts) {
    return new Promise(function(resolve, reject) {
      return regKey.get(opts.appName, function(err, item) {
        return resolve(item != null);
      });
    });
  }
};
