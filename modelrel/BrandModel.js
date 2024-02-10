// DepartmentsModel.js

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./Databases.js");

const BrandModel = sequelize.define(
  "brands",
  {
    name: {
      type: Sequelize.STRING,
    },
    // Add other department attributes as needed
  },
  {
    tableName: "brands",
    modelName: "BrandModel",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = BrandModel;