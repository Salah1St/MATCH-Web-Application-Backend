module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define(
    'Chat',
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
  Chat.associate = (db) => {
    Chat.belongsTo(db.User, {
      as: 'acceptId',
      foreignKey: {
        name: 'acceptId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    Chat.belongsTo(db.User, {
      as: 'requestId',
      foreignKey: {
        name: 'requestId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };
  return Chat;
};
