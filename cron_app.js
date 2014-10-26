var app = require('./app');
var winston = require('winston');
var CronJob = require('cron').CronJob;

var job = new CronJob({
  cronTime: '49 * * * *',
  onTick: function() {
    app.send_requests();
  }
});

job.start();
