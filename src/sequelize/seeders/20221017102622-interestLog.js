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
    return queryInterface.bulkInsert("interest_logs", [
      {
        created_at: new Date(),
        updated_at: new Date(),
        interest_id: 1,
        user_id: 1,
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        interest_id: 2,
        user_id: 2,
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        interest_id: 3,
        user_id: 3,
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        interest_id: 4,
        user_id: 4,
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        interest_id: 5,
        user_id: 5,
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
    return queryInterface.bulkDelete("interest_logs", null, {});
  },
};
