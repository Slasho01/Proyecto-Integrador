const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         allowNull:false,
         primaryKey: true
      },
      name: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false,
      },
      status: {
         type: DataTypes.ENUM("Alive", "Dead", "unknown"),
         defaultValue: "Alive",
      },
      species:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      gender:{
         type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
         allowNull: false,
      },
      origin:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      image:{
         type: DataTypes.STRING,
         allowNull: false,
      }
   }, { timestamps: false });
};
