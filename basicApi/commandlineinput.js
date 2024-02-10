// make file and remove file with command line input
const fs = require("fs");
const input=process.argv;
if(input[2]=="add"){
    fs.writeFileSync(input[3],input[4]); //to add file
}else if(input[2]=="delete"){
    fs.unlinkSync(input[3]); //to delete file
}else{
    console.log("Invalid data");
}
