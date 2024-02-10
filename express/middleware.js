module.exports=reqFilter = (req,resp,next)=>{
    if(!req.query.age){
        resp.send("Please provide you age");
    }else if(req.query.age < 18 ){
        resp.send("Not eligible to access this page");
    }else{
        next();
    }
}