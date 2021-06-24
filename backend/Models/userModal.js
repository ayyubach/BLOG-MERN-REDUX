const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    email: {type:String,unique:true},
    password: {type:String},
    isAdmin:{type:Boolean,default:false},
    token: {type:String,default:''},

});


const userModal = mongoose.model('user',userSchema);

module.exports = userModal ;