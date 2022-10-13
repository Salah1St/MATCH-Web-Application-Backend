module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      text: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    { underscored: true }
  );
  Post.associate = (db) => {
    Post.belongsTo(db.User, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    Post.hasMany(db.Like, {
      foreignKey: {
        name: 'postId',
        allowNull: false,
      },

      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    Post.hasMany(db.Comment, {
      foreignKey: {
        name: 'postId',
        allowNull: false,
      },

      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };
  return Post;
};
