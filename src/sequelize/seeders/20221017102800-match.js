'use strict';

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
    return queryInterface.bulkInsert('matches', [
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 1,
        second_id: 2
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 1,
        second_id: 3
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 1,
        second_id: 4
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 1,
        second_id: 5
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 1,
        second_id: 6
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 1,
        second_id: 7
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 1,
        second_id: 8
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 1,
        second_id: 9
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 1,
        second_id: 10
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 2,
        second_id: 1
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 2,
        second_id: 3
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 2,
        second_id: 4
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 2,
        second_id: 5
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 2,
        second_id: 6
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 2,
        second_id: 7
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 2,
        second_id: 8
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 2,
        second_id: 9
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 2,
        second_id: 10
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 3,
        second_id: 4
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 3,
        second_id: 5
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 3,
        second_id: 6
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 3,
        second_id: 7
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 3,
        second_id: 8
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 3,
        second_id: 9
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 3,
        second_id: 10
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 4,
        second_id: 5
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 4,
        second_id: 6
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 4,
        second_id: 7
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 4,
        second_id: 8
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 4,
        second_id: 9
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 4,
        second_id: 10
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 5,
        second_id: 6
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 5,
        second_id: 7
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 5,
        second_id: 8
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 5,
        second_id: 9
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 5,
        second_id: 10
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 6,
        second_id: 7
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 6,
        second_id: 8
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 6,
        second_id: 9
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 6,
        second_id: 10
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 7,
        second_id: 8
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 7,
        second_id: 9
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 7,
        second_id: 10
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 8,
        second_id: 8
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 8,
        second_id: 9
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 8,
        second_id: 10
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
        first_id: 9,
        second_id: 10
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('matches', null, {});
  }
};
