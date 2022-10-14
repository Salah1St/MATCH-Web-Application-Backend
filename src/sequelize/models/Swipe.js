module.exports = (sequelize, DataTypes) => {
  const Swipe = sequelize.define('Swipe', {}, { underscored: true });
  Swipe.associate = (db) => {
    Swipe.belongsTo(db.User, {
      as: 'firstId',
      foreignKey: {
        name: 'firstId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    Swipe.belongsTo(db.User, {
      as: 'secondId',
      foreignKey: {
        name: 'secondId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };
  return Swipe;
};
