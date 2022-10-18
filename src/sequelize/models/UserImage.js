module.exports = (sequelize, DataTypes) => {
  const UserImage = sequelize.define(
    'UserImage',
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    { underscored: true }
  );
  UserImage.associate = (db) => {
    UserImage.belongsTo(db.User, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };
  return UserImage;
};
