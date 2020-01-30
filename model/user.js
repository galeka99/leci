module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    name      : DataTypes.STRING,
    email     : DataTypes.STRING(75),
    password  : DataTypes.STRING(32),
    phone     : DataTypes.STRING(13)
  }, {
    createdAt : 'created_at',
    updatedAt : false
  });
};