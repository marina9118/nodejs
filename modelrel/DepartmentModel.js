// DepartmentsModel.js

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./Databases.js");

const DepartmentModel = sequelize.define(
  "departments",
  {
    title: {
      type: Sequelize.STRING,
    },
    // Add other department attributes as needed
  },
  {
    tableName: "departments",
    modelName: "DepartmentModel",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = DepartmentModel;