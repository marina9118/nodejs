const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    let db = result.db('e-comm');
    let collection = db.collection('products');
    // let response = await collection.find().toArray(); //for all result
    let response = await collection.find({brand:"Redmi"}).toArray(); //for single result
    console.log(response);
}

getData();