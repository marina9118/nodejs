const {Sequelize,Datatype} = require('sequelize');
const db = require("../Config/Database.js");
const Tutorial = require("../Model/Tutorial");
const Post = db.define(
    "post",
    {
        "title":{
            type : Sequelize.TEXT
        },
        "description":{
            type : Sequelize.TEXT
        },
        "tutorial_id":{
            type : Sequelize.INTEGER
        }
    },
    {
        tableName: "post",
        modelName: "Post",
        createdAt: false,
        updatedAt: false,
    }
);
Post.belongsTo(Tutorial, {as:"tutorial", foreignKey: "tutorial_id" });
module.exports = Post

