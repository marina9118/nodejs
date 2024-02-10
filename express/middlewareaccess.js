const express = require('express');
const app = express();
const reqFilter = require('./middleware') ;
const route = express.Router();
route.use(reqFilter);
// const reqFilter = (req,resp,next)=>{
//     if(!req.query.age){
//         resp.send("Please provide you age");
//     }else if(req.query.age < 18 ){
//         resp.send("Not eligible to access this page");
//     }else{
//         next();
//     }
// }
// ^
// |
// | we also add this middleware in other file and use it here for this we have to make module
// app.use(reqFilter); //for work with all route we use it like that if we want to use it with specific route then we use it in another way
// ^
// |
// | here we can make the route and using one route multiple times instead of this we can group for same route and use it one time for this we need express.router

app.get("/",(res,resp)=>{
    resp.send("<h1>Welcome to home page</h1>");
});
app.get("/about",(res,resp)=>{
    resp.send("<h1>Welcome to about page</h1>");
});
app.get("/user",reqFilter,(res,resp)=>{
    resp.send("<h1>Welcome to user</h1>");
});
app.get("/user",reqFilter,(res,resp)=>{
    resp.send("<h1>Welcome to user</h1>");
});
route.get("/user1",(res,resp)=>{
    resp.send("<h1>Welcome to user1</h1>");
});

app.use('/',route);
app.listen(5000);