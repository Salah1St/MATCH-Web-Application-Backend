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
      },{
        username: "Tulip",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Tulip@gmail.com",
        first_name: "Tulip",
        last_name: "Tulip",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890504/GroupProject/tulip_2_avblfz.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Alderley",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Alderley@gmail.com",
        first_name: "Alderley",
        last_name: "Alderley",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890506/GroupProject/%E0%B8%AD%E0%B8%AD%E0%B9%80%E0%B8%94%E0%B8%A2%E0%B9%8C_4_jmj6lo.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "aclaire ",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "aclaire@gmail.com",
        first_name: "aclaire",
        last_name: "aclaire",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890506/GroupProject/%E0%B9%80%E0%B8%AD%E0%B9%81%E0%B8%84_c3oy2i.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Venice",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Venice@gmail.com",
        first_name: "Venice",
        last_name: "Venice",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890505/GroupProject/vanish_3_yxwftb.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Neptune",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Neptune@gmail.com",
        first_name: "Neptune",
        last_name: "Neptune",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890505/GroupProject/%E0%B9%80%E0%B8%99%E0%B8%9B%E0%B8%88%E0%B8%B9%E0%B8%99_3_uz0u1i.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "NewYear",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "NewYear@gmail.com",
        first_name: "NewYear",
        last_name: "NewYear",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890505/GroupProject/%E0%B8%9B%E0%B8%B5%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_viyuxw.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "blur",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "blur@gmail.com",
        first_name: "blur",
        last_name: "blur",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890504/GroupProject/blu_1_mrk9xp.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Alin",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Alin@gmail.com",
        first_name: "Alin",
        last_name: "Alin",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890504/GroupProject/Alin_1_ly3x9z.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "Pponly",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Pp@gmail.com",
        first_name: "Pp",
        last_name: "Pp",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890502/GroupProject/1_jjcqmb.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        username: "Sherry",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Sherry@gmail.com",
        first_name: "Sherry",
        last_name: "Sherry",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890503/GroupProject/3_3_enm7v4.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "Melbourne",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Melbourne@gmail.com",
        first_name: "Melbourne",
        last_name: "Melbourne",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890502/GroupProject/3_2_cbjxna.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "Yuki",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Yuki@gmail.com",
        first_name: "Yuki",
        last_name: "Yuki",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890501/GroupProject/2_qaffb6.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Riko",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Riko@gmail.com",
        first_name: "Riko",
        last_name: "Riko",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890504/GroupProject/riko_1_snn21u.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Chiwa",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Chiwa@gmail.com",
        first_name: "Chiwa",
        last_name: "Chiwa",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890505/GroupProject/%E0%B8%8A%E0%B8%B4%E0%B8%A7%E0%B8%B2_disnxz.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
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
