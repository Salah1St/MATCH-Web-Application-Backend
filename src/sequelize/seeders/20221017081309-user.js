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
    return queryInterface.bulkInsert("users", [
      {
        username: "bassy",
        password:
          "$2a$12$WEIcQFbEG10aJ2sRqvFaUO9ky.vOWxvFSyUfQw0bqrOufNKx44JNa",
        role: "member",
        email: null,
        first_name: "bbbbb",
        last_name: "cccc",
        phone_number: "0899999999",
        profile_image:
          "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/642cbf1af02109d1d541cb5efa80627c0553c977_xxl-1.jpg",
        birth_date: "2002-07-15",
        about_me: "good boy",
        occupation: "engineer",
        gender: "MALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "bewwy",
        password:
          "$2a$12$pU9gvY3nSR6Jy3dfWlRlouFj2ptSNjLmXzN45j.lE6GIjWQO3IgLy",
        role: "member",
        email: null,
        first_name: "aaaaa",
        last_name: "sssss",
        phone_number: "0811111111",
        profile_image:
          "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/17f390c21a238cfbad5af0643bd573c698bbe702_xxl-1.jpg",
        birth_date: "2002-07-16",
        about_me: "good girl",
        occupation: "doctor",
        gender: "MALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "gemmy",
        password:
          "$2a$12$EwCAep5G.L48CGhCEm4eEOn0lXS71EVjiDI9HLga1GMxX9K5/oOXO",
        role: "member",
        email: "a@gmail.com",
        first_name: "bbbb",
        last_name: "cccc",
        phone_number: null,
        profile_image:
          "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/3dbf205aba27a1427b92b062d78a7bba5ce69a7f_xxl-1.jpg",
        birth_date: "2002-07-15",
        about_me: "good guy",
        occupation: "teacher",
        gender: "MALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "nany",
        password:
          "$2a$12$4LV4OlUJszuFLgjnqg7LvuPQakg/g396/nRSmL.8Nzq4ucEkSWRaS",
        role: "member",
        email: "n@gmail.com",
        first_name: "nnnn",
        last_name: "bbbb",
        phone_number: null,
        profile_image:
          "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/9a940eda23f0f6e28653943cb78ae326c3fe0268_xxl-1.jpg",
        birth_date: "2002-06-15",
        about_me: "good game",
        occupation: "rider",
        gender: "MALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "bally",
        password:
          "$2a$12$aRVjkD8S0pvRRLw7YQPHyOfABKrr0ZX6TIf2Hmrj1iErorc/LRrEO",
        role: "member",
        email: "h@gmail.com",
        first_name: "hhhh",
        last_name: "uuuu",
        phone_number: null,
        profile_image:
          "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/2d7630d85edcb94196176630b1eafd9b01657059_xxl-1.jpg",
        birth_date: "2002-03-22",
        about_me: "good gene",
        occupation: "driver",
        gender: "MALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "many",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "admin",
        email: "m@gmail.com",
        first_name: "mmmm",
        last_name: "nnnn",
        phone_number: null,
        profile_image:
          "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/33c49ef90fa7cc01232af7a6a62aadd386965937_xxl-1.jpg",
        birth_date: "2002-03-27",
        about_me: "good admin",
        occupation: "admin",
        gender: "MALE",
        created_at: new Date(),
        updated_at: new Date(),
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
    return queryInterface.bulkDelete("users", null, {});
  },
};
