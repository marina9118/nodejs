const Sequelize = require('sequelize');
require('dotenv').config();

const database = process.env.DB_NAME;
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const hostname = {
    host : process.env.DB_HOST,
    dialect : "mysql",
    logging: false,
}

const Con = new Sequelize(database,user,password,hostname);
Con.authenticate().then(()=>{ }).catch((error)=>{
    console.log(error)
})
module.exports = Con;
