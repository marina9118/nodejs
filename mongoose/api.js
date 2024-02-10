const express = require('express');
require('./config');
const product=require('./product');
const app=express();
app.use(express.json());
app.get('/',async (req,resp)=>{
    const result = await product.find();
    resp.send(result);
});
app.post('/',async (req,resp)=>{
    const data = new product(req.body);
    const result= await data.save();
    resp.send(result);
});
app.put('/:_id',async (req,resp)=>{
    const data =await product.updateOne(
        req.params,
        {
            $set:req.body
        }
    );
    resp.send(data);
});

app.delete('/:_id',async (req,resp)=>{
    const data=await product.deleteOne(req.params);
    resp.send(data);
})
app.listen(7001);