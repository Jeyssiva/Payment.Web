'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Profile', [{
        Fullname: 'Jeyalakshmi',
        Username: 'jeys',
        Gender: 1,
        Email: 'jeyalakshmi.r@techmango.net',    
        PhoneNum: '806887',
        Address : 'xxxxxxxxxxxxxxxx',
        Password : 'password1',
        StatusID : 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Profile', null, {});
  }
};
