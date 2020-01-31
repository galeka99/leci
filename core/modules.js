const config    = require('./config');
const moment    = require('moment');

/**
 * @param {string} message Message that will be printed as log
 * @return {void}
 */

exports.print = (message) => {
  if (config.logs.enable) {
    const now = moment().format(config.logs.format);
    console.log(`[${now}] ${message}`);
  }
};