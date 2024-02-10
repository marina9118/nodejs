const express = require('express');
const product = require('./product');
require('./config');
const app = express();
app.use(express.json());

app.get('/',(req,resp)=>{
    resp.send('Connected');
})

app.get('/search/:key',async (req,resp)=>{
    const result = await product.find({
        "$or":[
            {"name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}},
            {"category":{$regex:req.params.key}}
        ]
    });
    resp.send(result);
})

app.listen(5000);