const { Sequelize } = require("sequelize");

// Replace these values with your actual database connection details
const DB_NAME = "test";
const DB_USER = "root";
const DB_PASSWORD = "";
const DB_HOST = "localhost"; // or your database host
const DB_DIALECT = "mysql"; // or the dialect of your database (e.g., postgres, sqlite)

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
