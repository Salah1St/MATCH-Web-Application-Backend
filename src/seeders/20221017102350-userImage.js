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
    return queryInterface.bulkInsert("user_Images", [
      {
        url: "https://image.shutterstock.com/image-vector/man-beard-icon-flat-single-600w-627473393.jpg",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 1,
      },
      {
        url: "https://image.shutterstock.com/image-vector/woman-agent-call-center-face-600w-1697032462.jpg",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 2,
      },
      {
        url: "https://image.shutterstock.com/image-vector/color-image-cartoon-half-body-600w-637366042.jpg",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 3,
      },
      {
        url: "https://image.shutterstock.com/image-vector/customer-service-iconinformation-call-centre-600w-596085587.jpg",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 4,
      },
      {
        url: "https://image.shutterstock.com/image-vector/call-center-customer-service-600w-1288126258.jpg",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 5,
      },
      {
        url: "https://image.shutterstock.com/image-vector/operator-vector-icon-style-flat-600w-344498249.jpg",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 6,
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
    return queryInterface.bulkDelete("user_Images", null, {});
  },
};
