const dbConnect=require('./mongocon');
const insert=async ()=>{
    const db=await dbConnect();
    const result =await db.insertMany(
        [
            {name:'note 54',brand:'Vivo',price:35000,category:"mobile"},
        {name:'note 52',brand:'Vivo',price:35000,category:"mobile"},
        {name:'note 53',brand:'Vivo',price:35000,category:"mobile"}
        ]
    )
    // console.log(result);
    if(result.acknowledged){
        console.log("data inserted successfully");
    }
}
insert();