const dbConnect=require('./mongocon');

const deleteData=async () =>{
    db=await dbConnect();
    // const result=await db.deleteOne({name:"nord 2"});
    const result=await db.deleteMany({name:"nord 2"});
    console.log(result);
}
deleteData();