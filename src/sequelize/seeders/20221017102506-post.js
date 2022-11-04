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
    return queryInterface.bulkInsert("posts", [
      {
        text: "test1",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 1,
      },
      {
        text: "test2",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 2,
      },
      {
        text: "test3",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 3,
      },
      {
        text: "test4",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 4,
      },
      {
        text: "test5",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 5,
      }, {
        text: "test6",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 6,
      }, {
        text: "test7",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 7,
      }, {
        text: "test8",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 8,
      }, {
        text: "test9",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 9,
      }, {
        text: "test10",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 10,
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
    return queryInterface.bulkDelete("posts", null, {});
  },
};
