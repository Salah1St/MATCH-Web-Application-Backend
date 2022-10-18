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
    return queryInterface.bulkInsert("chats", [
      {
        message: "hello",
        created_at: new Date(),
        updated_at: new Date(),
        accept_id: 1,
        request_id: 2,
      },
      {
        message: "hi",
        created_at: new Date(),
        updated_at: new Date(),
        accept_id: 1,
        request_id: 3,
      },
      {
        message: "hey",
        created_at: new Date(),
        updated_at: new Date(),
        accept_id: 1,
        request_id: 4,
      },
      {
        message: "hello",
        created_at: new Date(),
        updated_at: new Date(),
        accept_id: 1,
        request_id: 5,
      },
      {
        message: "oh",
        created_at: new Date(),
        updated_at: new Date(),
        accept_id: 2,
        request_id: 3,
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
    return queryInterface.bulkDelete("chats", null, {});
  },
};
