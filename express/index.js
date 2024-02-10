const express = require('express');
const app = express();

app.get('',(req,resp)=>{
    
    // console.log(req.query.name);  //http://localhost:5000/?name=marina
    resp.send(`
    <a href='' target='_blank'>Home</a>
    <a href='/about' target='_blank'>About</a>
    <a href='/help' target='_blank'>Help</a>
    `);
});

app.get('/about',(req,resp)=>{
    resp.send("Hello , This is about page");
});

app.get('/help',(req,resp)=>{
    // resp.send(`
    // <h1>Hello , This is welcome</h1>
    // <input type="text" >
    // `);
    resp.send([
        {
            name:'mayera',
            email:'mayera@gmail.com'
        },
        {
            name:'ansh',
            email:'ansh@gmail.com'
        }
    ]);
});
app.listen(5000);