const express = require('express');
require('dotenv').config();
const app = express();
const Con = require('./Config/Database');
const web = require("./routes/web");
const Helper = require("./Helper");

console.log(Helper.index());
app.use(express.json());
app.use("/",web);
app.listen(process.env.PORT);