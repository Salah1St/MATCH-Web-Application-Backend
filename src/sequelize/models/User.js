module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      role: {
        type: DataTypes.ENUM('a', 'b'), // to be changed
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },

      phoneNumber: {
        type: DataTypes.STRING,
        unique: true,
      },
      profileImage: {
        type: DataTypes.STRING,
      },
      birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      aboutMe: {
        type: DataTypes.TEXT('long'),
      },
      occupation: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.ENUM('MALE', 'FEMALE', 'UNDEFINED'),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },

    { underscored: true }
  );
  User.associate = (db) => {
    User.hasMany(db.Post, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },

      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    User.hasMany(db.UserImage, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },

      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    User.hasMany(db.Like, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },

      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    User.hasMany(db.Comment, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },

      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    User.hasMany(db.Interest, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },

      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    //     User.hasMany(db.Comment, {
    //       foreignKey: {
    //         name: 'userId',
    //         allowNull: false,
    //       },
    //       onDelete: 'RESTRICT',
    //       onUpdate: 'RESTRICT',
    //     });
    //     User.hasMany(db.Bookmark, {
    //       foreignKey: {
    //         name: 'userId',
    //         allowNull: false,
    //       },
    //       onDelete: 'RESTRICT',
    //       onUpdate: 'RESTRICT',
    //     });
    //     User.hasMany(db.Follow, {
    //       as: 'UserFollower',
    //       foreignKey: {
    //         name: 'userFollower',
    //         allowNull: false,
    //       },
    //       onDelete: 'RESTRICT',
    //       onUpdate: 'RESTRICT',
    //     });
    //     User.hasMany(db.Follow, {
    //       as: 'UserBeingFollower',
    //       foreignKey: {
    //         name: 'userBeingFollow',
    //         allowNull: false,
    //       },
    //       onDelete: 'RESTRICT',
    //       onUpdate: 'RESTRICT',
    //     });
    //     User.hasMany(db.BidPrice, {
    //       foreignKey: {
    //         name: 'userId',
    //         allowNull: false,
    //       },
    //       onDelete: 'RESTRICT',
    //       onUpdate: 'RESTRICT',
    // }
    // );
  };

  return User;
};
