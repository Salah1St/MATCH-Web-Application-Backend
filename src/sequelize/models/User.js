module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
        type: DataTypes.ENUM('admin', 'member', 'goldmember'), // to be changed
        defaultValue: 'member',
        allowNull: false,

        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
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
        name: 'adminId',
        allowNull: false,
      },

      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    //************Chat ******** */
    User.hasMany(db.Chat, {
      as: 'myacceptId',
      foreignKey: {
        name: 'acceptId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    User.hasMany(db.Chat, {
      as: 'myrequestId',
      foreignKey: {
        name: 'requestId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    /*******Swipe********* */
    User.hasMany(db.Swipe, {
      as: 'swipefirstId',
      foreignKey: {
        name: 'firstId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    User.hasMany(db.Swipe, {
      as: 'swipesecondId',
      foreignKey: {
        name: 'secondId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    //************** match */
    User.hasMany(db.Match, {
      as: 'myfirstId',
      foreignKey: {
        name: 'firstId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    User.hasMany(db.Match, {
      as: 'mysecondId',
      foreignKey: {
        name: 'secondId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    User.hasMany(db.InterestLog, {
      as: 'userId',
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    User.hasMany(db.ChatMessage, {
      foreignKey: {
        name: 'senderId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    User.hasMany(db.ChatRoom, {
      as: 'mylowerId',
      foreignKey: {
        name: 'userLowerId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    User.hasMany(db.ChatRoom, {
      as: 'myhigherId',
      foreignKey: {
        name: 'userHigherId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };

  return User;
};
