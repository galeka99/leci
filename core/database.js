'use strict';

const sequelize = require('sequelize');
const fs        = require('fs');
const path      = require('path');
const workdir   = path.join(__dirname, '../model');
const dbconfig  = require('./config').database;
const config    = process.env.NODE_ENV == 'production' ? dbconfig.production : dbconfig.development;
const db        = new Object();
const options   = {
  host      : config.hostname,
  port      : config.port,
  dialect   : dbconfig.dialect,
  logging   : dbconfig.logging,
  pool      : dbconfig.pool.enable ? {
    min       : dbconfig.pool.min,
    max       : dbconfig.pool.max,
    idle      : dbconfig.pool.idle
  } : null
};
const seq       = new sequelize(config.dbname, config.username, config.password, options);

fs.readdirSync(workdir).forEach(item => {
  const format = item.split('.');
  if (format[format.length - 1] == 'js') {
    const model = seq['import'](path.join(workdir, item));
    db[model.name] = model;
  }
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = seq;
db.Sequelize = sequelize;

module.exports = db;