const express = require('express');
const app = express();
const path = require('path');
const publicPath=path.join(__dirname,'public');
// app.use(express.static(publicPath));
app.set('view engine','ejs');
app.get('/',(req,resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
});
app.get('/profile',(req,resp)=>{
    const user={
        name:"ayesha",
        email:"ayesha@gmail.com",
        phone:"9118214478",
        skills:['PHP','Jquery','Laravel','HTML']
    };
    resp.render('profile',{user});
});
app.get('/login',(req,resp)=>{
    resp.render('login');
})
app.get('/about',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`);
});
app.get('/contact',(req,resp)=>{
    resp.sendFile(`${publicPath}/contact.html`);
});
// not found page if the url is enter incorrectly except above url
app.get('*',(req,resp)=>{
    resp.sendFile(`${publicPath}/404.html`);
});
app.listen(5000);