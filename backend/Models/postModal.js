const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const postSchema = mongoose.Schema({
    user: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    title: {type:String},
    subject: {type:String},


});


const postModal = mongoose.model('post',postSchema);

module.exports = postModal ;