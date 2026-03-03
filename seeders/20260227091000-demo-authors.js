'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Authors', [
      {
        author_id: 1,
        name: 'Alice Example',
        email: 'alice@example.com',
        bio: 'Lead author from previous project.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author_id: 2,
        name: 'Bob Example',
        email: 'bob@example.com',
        bio: 'Contributor migrated from prior sample.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
