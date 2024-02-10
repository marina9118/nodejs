// DepartmentsModel.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./Databases.js");
const BrandModel = require("./BrandModel.js");

const CarModel = sequelize.define(
  "cars",
  {
    name: {
      type: Sequelize.STRING,
    },
    // Add other department attributes as needed
  }
  ,
  {
  //   tableName: "cars",
  //   modelName: "CarsModel",
    createdAt: false,
    updatedAt: false,
  }
);
CarModel.belongsTo(BrandModel, { foreignKey: "brand_id" }); // Add this line

module.exports = CarModel;