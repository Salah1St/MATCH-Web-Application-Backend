module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {}, { underscored: true });
  Match.associate = (db) => {
    Match.belongsTo(db.User, {
      as: 'myfirstId',
      foreignKey: {
        name: 'firstId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    Match.belongsTo(db.User, {
      as: 'mysecondId',
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
