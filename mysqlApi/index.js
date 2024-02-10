// const express = require("express");
// const app=express();
// const http = require("http");
const path = require('path');
const socketio = require("socket.io");

// const server = http.createServer(app);

// app.use(express.json());

// app.get("/",(req,resp)=>{
//     resp.send("you are connected");
// });

// server.listen(3000, () => {
//     console.log(`Example app listening on port 3000`);
// });
const express = require('express');

const app = express();
app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/', (req, res) => {
    // res.send('Hello from Codedamn');
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
})

const server = app.listen(1337, () => {
    console.log('Server running!')
})
const io = socketio(server);
io.on('connection', (socket) => {
    console.log(`New connection: ${socket.id}`);
})







