const express       = require('express');
const fs            = require('fs');
const path          = require('path');
const workdir       = path.join(__dirname, '../controller');
const router        = express.Router();
const controller    = new Object();

fs.readdirSync(workdir).forEach(item => {
  const format = item.split('.');
  if (format[format.length - 1] == 'js') {
    controller[format[0]] = require(path.join(workdir, item));
  }
});

//============================= WRITE ROUTE HERE =============================//

router.get('/user', controller.user.fetch);
router.post('/user', controller.user.register);

//============================= WRITE ROUTE HERE =============================//

router.all('*', (req, res) => {
  return res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
});

module.exports = router;