const dbConnect=require('./mongocon');

const update=async ()=>{
    const db=await dbConnect();
    // const result = await db.updateOne(
    //     {name:'note 51'},{
    //         $set:{name : "nord 1"}
    //     }
    // );
    const result = await db.updateMany(
        {name:'note 52'},{
            $set:{name : "nord 2"}
        }
    );
    console.log(result);
}
update();