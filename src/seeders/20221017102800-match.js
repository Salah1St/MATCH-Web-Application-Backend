"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("matches", [
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 2,
        second_id: 4,
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 2,
        second_id: 5,
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 3,
        second_id: 4,
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 3,
        second_id: 5,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("matches", null, {});
  },
};
