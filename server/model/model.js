const mongoose = require('mongoose');

var scheme = new mongoose.Schema({
    purpose:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:false
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    status:String
})

const PwdDB = mongoose.model('pwddb', schema)

module.exports = PwdDB