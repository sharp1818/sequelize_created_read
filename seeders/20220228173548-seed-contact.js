'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Contacts', [
      {
        firstname: 'Adrian',
        lastname: 'Shura',
        phone: '0000000',
        email: 'adrian.shura18@gmail.com',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstname: 'Fred',
        lastname: 'Santillan',
        phone: '929377684',
        email: 'capri7cor7nio@gmail.com',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
