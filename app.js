const express     = require('express');
const app         = express();
const fs          = require('fs');
const path        = require('path');
const bodyparser  = require('body-parser');
const cors        = require('cors');
const config      = require('./core/config');
const router      = require('./core/router');
const { print } = require('./core/modules');

if (config.bodyparser.enable) {
  app.use(bodyparser.json(config.bodyparser.config));
}
if (config.cors.enable) {
  app.use(cors(config.cors.config));
}

if (config.database.enable) {
  print('Loading models...');
  const model = require('./core/database');
}

print('Loading middleware...');
const middir = path.join(__dirname, 'middleware');
fs.readdirSync(middir).forEach(mid => {
  app.use(require(path.join(middir, mid)));
});

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(router);

app.listen(config.port, () => {
  print(`Service ready to use on port: ${config.port}`);
});