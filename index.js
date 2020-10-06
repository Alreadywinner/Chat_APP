const express = require('express');
const app = express();
const socketio = require('socket.io');
const http = require('http');
const router = require('./routes/charRoute');
const { addUser, removeUser,getUser} = require('./controllers/userController');

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const io = socketio(server);

app.use(router);

io.on('connect',(socket) => {
    socket.on('join',({name},callback)=>{
        const { error, user } = addUser({id:socket.id,name,room:"hello"});

        if(error) return callback(error);
        socket.join(user.room);

        socket.emit('message',{user:'Ed Aider',text:`Welcome ${user.name}`});
        
        socket.broadcast.to(user.room).emit('message', { user: 'Ed Aider', text: `${user.name} has joined!` });

        callback();
    });

    socket.on('sendMessage',(message,callback)=>{
        const user = getUser(socket.id);

        io.to(user.room).emit('message',{user:user.name,text:message});

        callback();
    });

    socket.on('disconnect',()=>{
        const user = removeUser(socket.id);

        if(user){
            io.to(user.room).emit('message',{user:'admin',text:`${user.name} have left`});
        }
    })
});

server.listen(PORT,()=>{console.log(`server is ready at port ${PORT}`)})