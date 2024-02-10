const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/e-comm");
const ProductSchema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});

const saveInDb = async ()=>{
    const ProductModel=mongoose.model('products',ProductSchema);
    let data = new ProductModel({name:"10",price:1000,brand:"Lava"});
    let result=await data.save();
    console.log(result);
}
const updateInDb = async ()=>{
    const Product=mongoose.model('products',ProductSchema);
    let data = await Product.updateOne(
        {name:"10t"},
        {
            $set:{
                name:"2t",
                brand:"Nord",
                price:1000,
                category:"Mobile",
            }
        }
    );
    console.log(data);
}
const deleteInDb = async ()=>{
    const Product=mongoose.model('products',ProductSchema);
    let data = await Product.deleteOne({name:"10t"});
    console.log(data);
}
const findInDb = async ()=>{
    const Product=mongoose.model('products',ProductSchema);
    let data = await Product.find();
    console.log(data);
}
findInDb();
// deleteInDb();
// saveInDb();
// updateInDb();