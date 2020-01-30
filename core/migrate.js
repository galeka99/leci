const db    = require('./database');
const arg   = process.argv[2];

if (arg == 'flush') {
  db.sequelize.sync({ force: true })
    .then(() => { console.log('Rewrite database successful'); })
    .catch(err => {
      console.log('Error while rewriting database');
      console.log(err);
    })
    .finally(() => { process.exit(0); });
  } else if (arg == 'alter') {
    db.sequelize.sync({ alter: true })
      .then(() => { console.log('Alter database successful'); })
      .catch(err => {
        console.log('Error while altering database');
        console.log(err);
      }).finally(() => { process.exit(0); });
} else {
  console.log('Error: the command \'migrate\' must be followed by \'flush\' or \'alter\' parameter');
}