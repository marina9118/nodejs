const express=require('express');
const dbConnect=require('./mongocon');
const app=express();
const mongodb=require('mongodb');
// to get data that is post by postman
app.use(express.json());

app.get('/',async (req,resp)=>{
    let db=await dbConnect();
    data=await db.find().toArray();
    resp.send(data);
});

app.post('/',async (req,resp)=>{
    let db=await dbConnect();
    result=await db.insertOne(req.body);
    resp.send(result);
});
// for fetched name update data except name because we can also have the situation to change the name in thata situation we user parameter
// app.put('/',async (req,resp)=>{
//     let db=await dbConnect();
//     // let result=await db.updateOne({name: 'F14'},{
//     //     $set:{name:"M14"}
//     // });
//     let result=await db.updateOne({name: req.body.name},
//         {$set:req.body});
//     resp.send(result);
// });

app.put('/:name',async (req,resp)=>{
    let db=await dbConnect();
    let result = await db.updateOne({name: req.params.name},
        {$set:req.body});
        resp.send(result);
});

app.delete('/:id',async (req,resp)=>{
    let db=await dbConnect();
    // _id is an object so thats why we require mongofb library and make object of this param then we can delete
    let result = await db.deleteOne({_id:new mongodb.ObjectId( req.params.id)});
    resp.send(result);
});
app.listen(5000);