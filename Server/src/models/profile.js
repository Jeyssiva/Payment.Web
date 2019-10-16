'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    ProfileID: DataTypes.INTEGER,
    Fullname: DataTypes.STRING,
    Username: DataTypes.STRING,
    Email: DataTypes.STRING,
    Gender: DataTypes.INTEGER,
    PhoneNum: DataTypes.STRING,
    Address : DataTypes.TEXT,
    Password : DataTypes.STRING,
    StatusID : DataTypes.INTEGER,
    CreatedAt: DataTypes.DATE,
    UpdatedAt:DataTypes.DATE
  }, {
    freezeTableName: true,
    tableName: 'Profile'
  });
  Profile.associate = function(models) {
    // associations can be defined here
  };
  return Profile;
};