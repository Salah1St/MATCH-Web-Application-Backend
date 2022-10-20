module.exports = (sequelize, DataTypes) => {
  const ChatRoom = sequelize.define(
    'ChatRoom',
    {
      roomName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    { underscored: true }
  );
  ChatRoom.associate = (db) => {
    ChatRoom.belongsTo(db.User, {
      as: 'mylowerId',
      foreignKey: {
        name: 'userLowerId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    ChatRoom.belongsTo(db.User, {
      as: 'myhigherId',
      foreignKey: {
        name: 'userHigherId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    ChatRoom.hasMany(db.ChatMessage, {
      foreignKey: {
        name: 'chatRoomId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });



  };
  return ChatRoom;
};
