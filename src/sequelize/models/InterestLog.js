module.exports = (sequelize, DataTypes) => {
  const InterestLog = sequelize.define(
    'InterestLog',
    {},
    { underscored: true }
  );
  InterestLog.associate = (db) => {
    InterestLog.belongsTo(db.User, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    InterestLog.belongsTo(db.Interest, {
      foreignKey: {
        name: 'interestId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };
  return InterestLog;
};
