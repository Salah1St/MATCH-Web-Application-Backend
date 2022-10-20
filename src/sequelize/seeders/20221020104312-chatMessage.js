'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("chat_messages", [
      {
        message:"hello",
        created_at: new Date(),
        updated_at: new Date(),
        sender_id:1,
        chat_room_id:1
      },
      {
        message:"hi",
        created_at: new Date(),
        updated_at: new Date(),
        sender_id:2,
        chat_room_id:1
      },
      {
        message:"where r u",
        created_at: new Date(),
        updated_at: new Date(),
        sender_id:1,
        chat_room_id:1
      },
      {
        message:"hello",
        created_at: new Date(),
        updated_at: new Date(),
        sender_id:1,
        chat_room_id:2
      },
      {
        message:"hello",
        created_at: new Date(),
        updated_at: new Date(),
        sender_id:1,
        chat_room_id:4
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("chat_messages", null, {});

  }
};
