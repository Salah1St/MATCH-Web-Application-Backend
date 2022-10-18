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
    return queryInterface.bulkInsert("comments", [
      {
        content: "good",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 1,
        post_id: 1,
      },
      {
        content: "wow",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 2,
        post_id: 2,
      },
      {
        content: "ahhh",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 3,
        post_id: 3,
      },
      {
        content: "ummm",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 4,
        post_id: 4,
      },
      {
        content: "arkkkk",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 5,
        post_id: 5,
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
    return queryInterface.bulkDelete("comments", null, {});
  },
};
