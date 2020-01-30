const { print } = require('../core/modules');
const { User } = require('../core/database');
const crypto = require('crypto');

exports.register = async (req, res) => {
  const name      = req.body.name;
  const email     = req.body.email;
  const password  = crypto.createHash('md5').update(req.body.password).digest('hex');
  const phone     = req.body.phone;

  const user = await User.create({ name: name, email: email, password: password, phone: phone });
  if (user) {
    print(`User with email \'${email}\' successfully registered`);
    return res.status(201).json({ message: 'Register successful' });
  } else {
    return res.status(500).json({ message: 'Error while regitering user' });
  }
};

exports.fetch = async (req, res) => {
  const users = await User.findAll();
  return res.status(200).json(users);
};