const express = require('express');
const postRoute = express.Router();
const postModal = require('../models/postModal.js');

postRoute.post('/create',async (req,res)=>{
    try{
        const newPost = new postModal({
            user:[req.body.user],
            title:req.body.title,
            subject:req.body.subject,

        });
    
        const createdPost = await newPost.save();
    
        res.send(createdPost);

    }catch(err){
        console.log(err);
    }
});

postRoute.get('/posts',async (req,res)=>{
    const posts = await postModal.find({}).populate('user','-password -token -isAdmin');
    res.send(posts);
});


postRoute.post('/userposts',async (req,res)=>{
    const posts = await postModal.find({user:req.body.id}).populate('user','-password -token -isAdmin');
    res.send(posts);
});

postRoute.post('/removepost',async (req,res)=>{
    try{
        const product = await postModal.deleteOne({_id:req.body.id});
        res.send({message:'Post deleted successfully'})
    }catch(err){
        res.send({message:'Failed to remove product'})
    }
    
})

postRoute.put('/editpost',async (req,res)=>{
  
    try{
        console.log(req.body._id)
        const post = await postModal.findById(req.body._id);
            
        if(post){
            console.log('get here')
            post.title=req.body.title || post.name;
            post.email=req.body.subject || post.subject;
            
            const updatedPost = await post.save();
            return res.send({success :"Post  saved successfully",post})
        }
        res.send({error:"Post is not found",updatedUser:{}})
    }catch(err){
     res.send({message:"Error in saving user informations",error:err})
    }
})
module.exports = postRoute;