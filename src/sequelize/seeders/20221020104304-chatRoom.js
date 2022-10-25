'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("chat_rooms", [
      {
        room_name:"12",
        created_at: new Date(),
        updated_at: new Date(),
        user_lower_id: 1,
        user_higher_id: 2,
      },
      {
        room_name:"13",
        created_at: new Date(),
        updated_at: new Date(),
        user_lower_id: 1,
        user_higher_id: 3,
      },
      {
        room_name:"14",
        created_at: new Date(),
        updated_at: new Date(),
        user_lower_id: 1,
        user_higher_id: 4,
      },
      {
        room_name:"15",
        created_at: new Date(),
        updated_at: new Date(),
        user_lower_id: 1,
        user_higher_id: 5,
      },
      {
        room_name:"23",
        created_at: new Date(),
        updated_at: new Date(),
        user_lower_id: 2,
        user_higher_id: 3,
      },
      
      {
        room_name:"24",
        created_at: new Date(),
        updated_at: new Date(),
        user_lower_id: 2,
        user_higher_id: 4,
      },
      
      {
        room_name:"25",
        created_at: new Date(),
        updated_at: new Date(),
        user_lower_id: 2,
        user_higher_id: 5,
      },
      
      {
        room_name:"34",
        created_at: new Date(),
        updated_at: new Date(),
        user_lower_id: 3,
        user_higher_id: 4,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("chat_rooms", null, {});

  }
};
