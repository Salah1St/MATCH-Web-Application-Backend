"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        username: "sandy",
        password:
          "$2a$12$WEIcQFbEG10aJ2sRqvFaUO9ky.vOWxvFSyUfQw0bqrOufNKx44JNa",
        role: "member",
        email: null,
        first_name: "sandy",
        last_name: "sandy",
        phone_number: "0899999900",
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132294/GroupProject/406raedoil8axizwi_wpkage.jpg",
        birth_date: "2002-07-15",
        about_me: "good girl",
        occupation: "engineer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "fern",
        password:
          "$2a$12$pU9gvY3nSR6Jy3dfWlRlouFj2ptSNjLmXzN45j.lE6GIjWQO3IgLy",
        role: "member",
        email: null,
        first_name: "fern",
        last_name: "fern",
        phone_number: "0811111100",
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132295/GroupProject/406raegxrl9p8grge_zfejun.jpg",
        birth_date: "2002-07-16",
        about_me: "good girl",
        occupation: "doctor",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "Jam",
        password:
          "$2a$12$EwCAep5G.L48CGhCEm4eEOn0lXS71EVjiDI9HLga1GMxX9K5/oOXO",
        role: "member",
        email: "Jam@gmail.com",
        first_name: "Jam",
        last_name: "Jam",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667133131/GroupProject/300151641_913175602933593_989121301812250021_n_wuhkzp.jpg",
        birth_date: "2002-07-15",
        about_me: "good guy",
        occupation: "teacher",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "frame",
        password:
          "$2a$12$4LV4OlUJszuFLgjnqg7LvuPQakg/g396/nRSmL.8Nzq4ucEkSWRaS",
        role: "member",
        email: "frame@gmail.com",
        first_name: "frame",
        last_name: "frame",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132295/GroupProject/406rae5b1l7nhme8s_r3x0qb.jpg",
        birth_date: "2002-06-15",
        about_me: "good game",
        occupation: "rider",
        gender: "MALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "pladow",
        password:
          "$2a$12$aRVjkD8S0pvRRLw7YQPHyOfABKrr0ZX6TIf2Hmrj1iErorc/LRrEO",
        role: "member",
        email: "pladow@gmail.com",
        first_name: "pladow",
        last_name: "pladow",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132295/GroupProject/306960977_827406628617085_224114062780136015_n_lp8zov.jpg",
        birth_date: "2002-03-22",
        about_me: "good gene",
        occupation: "driver",
        gender: "MALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "flour",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "flour@gmail.com",
        first_name: "flour",
        last_name: "flour",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132296/GroupProject/313102838_588622696396071_6797056266366024900_n_wqhdbf.jpg",
        birth_date: "2002-03-27",
        about_me: "good admin",
        occupation: "admin",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Foul",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Foul@gmail.com",
        first_name: "Foul",
        last_name: "Foul",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132296/GroupProject/313207995_672236874470724_4621285147522405609_n_mm9tdv.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Van",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Van@gmail.com",
        first_name: "Van",
        last_name: "Van",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132296/GroupProject/vanish_1_cujawa.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Oreo",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Oreo@gmail.com",
        first_name: "Oreo",
        last_name: "Oreo",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132296/GroupProject/311834739_142336511866661_7890905380116576792_n_ljc5qj.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Cream",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Cream@gmail.com",
        first_name: "Cream",
        last_name: "Cream",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132296/GroupProject/313198933_588007999790874_5231398820979467283_n_lyswgy.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Neko",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Neko@gmail.com",
        first_name: "Neko",
        last_name: "Neko",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132302/GroupProject/250313681_144174344608554_6837510388731075099_n_suwpza.jpg",
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
