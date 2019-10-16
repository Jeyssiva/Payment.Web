'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Profile', {
      ProfileID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Fullname: {
        type: Sequelize.STRING(50),
        allowNull : false
      },
      Username: {
        type: Sequelize.STRING(50),
       // length : 50,
        allowNull : false
      },
      Gender : {
        type : Sequelize.SMALLINT,
        allowNull : false
      },
      Email: {
        type: Sequelize.STRING,
        //length : 50,
        allowNull :false
      },
      PhoneNum : {
        type : Sequelize.STRING(15),
       // length : 11
      },
      Address: {
        type : Sequelize.TEXT
      },
      Password : {
        type : Sequelize.STRING(30),
       // length : 30
      },
      StatusID : {
        type : Sequelize.SMALLINT,
        allowNull : false,
        defaultValue : 1
      },
      CreatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UpdatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .then(() => queryInterface.addConstraint('Profile', ['Email'],{
        type: 'unique'
      }));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Profile');
  }
};