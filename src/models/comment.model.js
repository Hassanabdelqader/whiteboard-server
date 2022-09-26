/*eslint-disable */
function commments(sequelize, DataTypes) {
  const comment = sequelize.define(
    "Comments",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // Other model options go here
    }
  );

  return comment;
}
module.exports = commments;
