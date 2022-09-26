/*eslint-disable */
function blackListUsers(sequelize, DataTypes) {
    const blackListUser = sequelize.define(
      "blacklist",
      {
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        reason: {
          type: DataTypes.STRING,
          defaultValue: "Terms and condition"
        },
        token: {
          type: DataTypes.STRING,
          defaultValue: null
        },
      },
      {
        // Other model options go here
      }
    );
  
    return blackListUser;
  }
  module.exports = blackListUsers;