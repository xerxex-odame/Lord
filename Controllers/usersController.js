const usersModel = require('../Models/usersModel');




const addUser =(request,response) => {
    usersModel.create(request.body);
}

const getAllUsers =() => {}

const deleteUserById = () => {}

const getUserById = () => {}

const updateUserById = () => {}

module.exports ={
     addUser,
     getAllUsers,
     deleteUserById,
     getUserById,
     updateUserById,
    };