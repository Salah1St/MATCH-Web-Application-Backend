module.exports = (sequelize, DataTypes) => {
  const Interest = sequelize.define(
    'Interest',
    {
      icon: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    { underscored: true }
  );
  Interest.associate = (db) => {
    Interest.belongsTo(db.User, {
      foreignKey: {
        name: 'adminId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    Interest.hasMany(db.InterestLog, {
      foreignKey: {
        name: 'interestId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };
  return Interest;
};
