const fs = require('fs');
const path = require('path');
const dirName=path.join(__dirname,'crud');
const filePath = `${dirName}/apple.txt`;
// fs.writeFileSync(filePath,'This is a text');
// console.log("create successfully");
// file read
// fs.readFile(filePath,'utf-8',(err,files)=>{
//     console.log(files);
// });
// file update
// fs.appendFile(filePath,' and file name is apple.txt',(err,files)=>{
//     if(!err) console.warn("file is updated");
// })
// rename file
// fs.rename(filePath,`${dirName}/fruit.txt`,(err)=>{
//     if(!err) console.log('Filename is renamed');
// })
// delete file
fs.unlinkSync(`${dirName}/fruit.txt`);