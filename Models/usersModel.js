const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    fullname:{
        type :String,
        require:true
    },
    phone_number:{
        type:String,
        unique: true
    },
    password:{
        type:String
    },
    farm_size:{
        type:String
    },
    farm_location:{
        type:String
    }

});

const usersModel =mongoose.model('user',usersSchema);
module.exports = usersModel;