require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const favoriteFunction = require("./models/Favorite")
const userFunction = require("./models/User")

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false }
);
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((err) => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
   favoriteFunction(sequelize);
   userFunction(sequelize);
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, {through: "user_favorite"})
Favorite.belongsToMany(User, {through: "user_favorite"})


module.exports = {
   sequelize,
   ...sequelize.models
};
