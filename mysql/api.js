const express = require('express');
const app=express();
const con=require('./index');

app.use(express.json());
app.get('/',(req,resp)=>{
    const sql = "SELECT * FROM users";
    con.query(sql, (err, result) => {
      if (err) {
        console.error('Error executing the query:', err);
        return;
      }
      resp.send(result);
    });
});

app.post('/',(req,resp)=>{
    const data = req.body;
    con.query("INSERT INTO users SET ?",data, (err, result,field) => {
      if (err) {
        resp.send(err);
        return;
      }
      resp.send(result);
    });
});
app.put('/:id',(req,resp)=>{
    const data = [req.body.name,req.body.email,req.params.id];
    con.query("UPDATE users SET name = ?,email = ? WHERE id = ?",data, (err, result,field) => {
      if (err) {
        resp.send(err);
        return;
      }
      resp.send(result);
    });
});
app.delete('/:id',(req,resp)=>{
    con.query("DELETE FROM users WHERE id = ?",req.params.id, (err, result,field) => {
      if (err) {
        resp.send(err);
        return;
      }
      resp.send(result);
    });
});

app.listen(5000);