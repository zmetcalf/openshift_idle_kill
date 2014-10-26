var async = require('async');
var fs = require('fs');
var request = require('superagent');
var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: 'request.log' })
  ]
});

var sites = {};

exports.send_requests = send_requests;

function send_requests() {
  fs.readFile('sites.json', 'utf8', function(err, data) {
    if (err) logger.error(err);
    sites = JSON.parse(data);
    async.each(Object.keys(sites.sites), function(site, callback) {
      request.get(sites.sites[site])
        .end(function(res) {
          logger.info('Received ' + res.statusCode + " on " + site + ".");
          callback();
        });
    }, function(err) {
      if (err) logger.error(err);
    });
  });
}

if (!module.parent) { send_requests(); }
