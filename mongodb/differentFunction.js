const dbConnect=require('./mongocon');
// dbConnect().then((resp)=>{
//     // resp.find().toArray().then((data)=>{
//     //     console.log(data);
//     // })
//     // for fetch all data
//     resp.find({name:'8'}).toArray().then((data)=>{
//             console.log(data);
//         })

// })
// console.log(dbConnect());

const main=async ()=>{
    let data = await dbConnect();
    data=await data.find().toArray();
    console.log(data);
    // console.log("main function is functioning perfectly");
}

main();
