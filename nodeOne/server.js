const http = require("http");
// http.createServer((req,resp)=>{
//     resp.write("Hello");
//     resp.end();
// }).listen(5555);
// function getName(req,resp){
//     resp.write("Hello");
//     resp.end();
// }
const getName=(req,resp)=>{
    resp.write("Hello1");
    resp.end();
}
http.createServer(getName).listen(5555);