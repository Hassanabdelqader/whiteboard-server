/*eslint-disable */
function user(sequelize, DataTypes) {
  const Users = sequelize.define(
    "User",
    {
      // Model attributes are defined here
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      token: {
        type: DataTypes.VIRTUAL,
      },
      role: {
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue : "user"
      },
      capabilities : {
        type: DataTypes.VIRTUAL,
        get: function() {
          const acl = {
            admin: ['read', 'create', 'delete', 'update'],
            user: ['read', 'create'],
          }
          return acl[this.role]
        }
      }
    },
    {
    }
  );

  return Users;
}
module.exports = user;
