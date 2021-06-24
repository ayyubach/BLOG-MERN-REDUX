const express = require('express');
const userRoute = express.Router();
const userModal = require('../models/userModal.js');
const jwt = require('jsonwebtoken');

userRoute.post('/register',async (req,res)=>{
    try{
        const newUser = new userModal({
            email:req.body.email,
            password:req.body.password,

        });
    
        const createdUser = await newUser.save();
    
        res.send(createdUser);

    }catch(err){
        console.log(err);
    }
});

userRoute.post('/getuser',async (req,res)=>{
    try{
            let user = await userModal.findOne({email:req.body.email});
            
            if(user.password == req.body.password){
                if(user.token==''){
                token = jwt.sign({user},'aaaaaaaa');
                user.token = token || '';
                await user.save();
                }
               
                
                res.send(user)
            }else{
                res.send({error:"Invalid password"})
            }
            
    }catch(err){
        res.send({message:'user not found',error:err.message});
        
    }


})

module.exports = userRoute;