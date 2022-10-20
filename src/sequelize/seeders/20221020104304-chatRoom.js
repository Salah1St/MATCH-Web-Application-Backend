'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("chat_rooms", [
      {
        room_name:"1,2",
        created_at: new Date(),
        updated_at: new Date(),
        user_lower_id: 1,
        user_higher_id: 2,
      },
      {
        room_name:"1,3",
        created_at: new Date(),
        updated_at: new Date(),
        user_lower_id: 1,
        user_higher_id: 3,
      },
      {
        room_name:"1,4",
        created_at: new Date(),
        updated_at: new Date(),
        user_lower_id: 1,
        user_higher_id: 4,
      },
      {
        room_name:"1,5",
        created_at: new Date(),
        updated_at: new Date(),
        user_lower_id: 1,
        user_higher_id: 5,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("chat_rooms", null, {});

  }
};
