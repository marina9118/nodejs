// const UsersModel = require("./UsersModel");
// const DepartmentModel = require("./DepartmentModel");
// UsersModel.findOne({
//   where: { id: 2 }, // Use the appropriate condition to find a specific user
//   include: [{ model: DepartmentModel, attributes: ['title'] }]
// }).then(user => {
//   console.log(user.toJSON());
// });
const CarModel = require("./CarsModel");
const BrandModel = require("./BrandModel");
CarModel.findOne({
  where: { id: 2 }, // Use the appropriate condition to find a specific user
  include: [{ model: BrandModel, attributes: ['name'] }]
}).then(user => {
  console.log(user.toJSON());
});