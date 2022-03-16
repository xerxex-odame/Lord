const express = require('express');
const mongoose = require('mongoose');
const userController = require('./controllers/usersController');

mongoose.connect('mongodb+srv://phanerosis:odame123@cluster0.aybm0.mongodb.net/FARMERSKONEKT?retryWrites=true&w=majority')
.then(()=>{
    console.log('DB is connected');
})
.catch((error)=>{
    console.log('DB not connected: ',error.message);
});
const server =express();
server.post('/users',userController.addUser);
server.get('/user',userController.getAllUsers);
server.delete('/user/:id',userController.deleteUserById);
server.put('/user/:id',userController.updateUsersById);
server.get('/users/:id',userController.getUsereByid);


server.listen(5052);