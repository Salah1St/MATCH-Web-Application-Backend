module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {}, { underscored: true });
  Match.associate = (db) => {
    Match.belongsTo(db.User, {
      as: 'userId',
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    Match.belongsTo(db.User, {
      as: 'firstId',
      foreignKey: {
        name: 'firstId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    Match.belongsTo(db.User, {
      as: 'secondId',
      foreignKey: {
        name: 'secondId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };
  return Match;
};
