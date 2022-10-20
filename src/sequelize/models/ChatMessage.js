module.exports = (sequelize, DataTypes) => {
  const ChatMessage = sequelize.define(
    'ChatMessage',
    {
      message: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    { underscored: true }
  );
  ChatMessage.associate = (db) => {
    ChatMessage.belongsTo(db.ChatRoom, {
      foreignKey: {
        name: 'chatRoomId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    ChatMessage.belongsTo(db.User, {
      foreignKey: {
        name: 'senderId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };
  return ChatMessage;
};
