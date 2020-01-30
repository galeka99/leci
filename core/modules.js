const config    = require('./config');
const moment    = require('moment');

exports.print = (message) => {
  if (config.logs.enable) {
    const now = moment().format(config.logs.format);
    console.log(`[${now}] ${message}`);
  }
};