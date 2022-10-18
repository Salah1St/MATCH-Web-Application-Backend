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
    return queryInterface.bulkInsert("interests", [
      {
        icon: "https://image.shutterstock.com/image-vector/running-man-athletics-marathon-summer-600w-1347864386.jpg",
        text: "sport",
        created_at: new Date(),
        updated_at: new Date(),
        admin_id: 1,
      },
      {
        icon: "https://image.shutterstock.com/image-vector/circular-fork-spoon-icon-600w-432057796.jpg",
        text: "food",
        created_at: new Date(),
        updated_at: new Date(),
        admin_id: 1,
      },
      {
        icon: "https://image.shutterstock.com/image-vector/teddy-bear-plush-toy-line-600w-356010809.jpg",
        text: "toy",
        created_at: new Date(),
        updated_at: new Date(),
        admin_id: 1,
      },
      {
        icon: "https://image.shutterstock.com/image-vector/vector-education-icon-600w-380065321.jpg",
        text: "education",
        created_at: new Date(),
        updated_at: new Date(),
        admin_id: 1,
      },
      {
        icon: "https://image.shutterstock.com/image-vector/ecommerce-shopping-cart-icon-flat-600w-1934607935.jpg",
        text: "shop",
        created_at: new Date(),
        updated_at: new Date(),
        admin_id: 1,
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
    return queryInterface.bulkDelete("interests", null, {});
  },
};
