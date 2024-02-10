const fs = require('fs');
// fs.writeFileSync('files/apple.txt','this is a fruit');
const path = require('path');
const dirPath=path.join(__dirname,'files');
// fs.unlinkSync('apple.txt');
// console.log(dirPath);
// for(i=1;i<5;i++){
//     fs.writeFileSync(dirPath+'/hello'+i+'.txt','a simple text file');
// }
// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log(item);
//     })
// });