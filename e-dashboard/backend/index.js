const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/User');
const Product = require('./db/Product');
const app = express();

app.use(express.json());
app.use(cors());
app.post("/", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);
});
app.post("/login", async (req, resp) => {
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body);
        if (user) {
            result = user;
        } else {
            result = "No user found";
        }
    } else {
        result = "Email & Password field is required";
    }
    resp.send(result);
});

app.post("/add-product", async (req, resp) => {
    let product = new Product(req.body);
    product = await product.save();
    resp.send(product);
})

app.get("/product-list",async (req,resp)=>{
    let result = await Product.find();
    resp.send(result);
})

app.listen(5000);