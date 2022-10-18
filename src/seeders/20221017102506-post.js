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
        text: "yeah",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/18/97/27/1000_F_518972795_ITA7JBzGRPXTo6AWoMwaG21vfT3A62ak.jpg",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 1,
      },
      {
        text: "yo",
        image:
          "https://as1.ftcdn.net/v2/jpg/05/20/99/34/1000_F_520993427_OAzSRpFc0rbNy5FUKxgRI9EpuFDHwoLv.jpg",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 2,
      },
      {
        text: "yes",
        image:
          "https://as1.ftcdn.net/v2/jpg/05/22/14/10/1000_F_522141084_YPFx85nE3ExJxW7WjEJg2VwSp38z19FU.jpg",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 3,
      },
      {
        text: "yup",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/20/04/83/1000_F_520048346_Le0PXTjDI5y8bXFQEnmtZO81Dm1YaPRM.jpg",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 4,
      },
      {
        text: "yoyo",
        image:
          "https://as1.ftcdn.net/v2/jpg/05/19/18/64/1000_F_519186467_EVmzIrUdGkZXjy7fzsZ1rI38siFbx16l.jpg",
        created_at: new Date(),
        updated_at: new Date(),
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
    return queryInterface.bulkDelete("posts", null, {});
  },
};
