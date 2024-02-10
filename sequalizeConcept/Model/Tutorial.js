const { Sequelize, DataTypes } = require("sequelize");
const db = require("../Config/Database.js");
const Tutorial = db.define(
  "tutorial",
  {
    title: {
      type: Sequelize.STRING,
    },

    description: {
      type: Sequelize.STRING,
    },

    published: {
      type: Sequelize.BOOLEAN,
    },
  },
  {
    tableName: "tutorial",
    modelName: "Tutorial",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Tutorial;
