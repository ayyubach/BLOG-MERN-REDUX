import axios from 'axios';
import {NEW_POST,GET_POSTS,GET_USER_POSTS,REFRESH_USER_POSTS,REFRESH_POSTS } from '../constants/postConstants';

export const createNewPost =  (postTitle,postSubject,id)=>async (dispatch)=>{

    const createdPost = await axios.post('http://localhost:5000/post/create',{
        user:id,
        title:postTitle,
        subject:postSubject
    })
    //console.log(userInfo.data)
    dispatch({type:NEW_POST,payload:createdPost.data});
    if(!createdPost.data.error){
    localStorage.setItem('error',JSON.stringify(createdPost.data));
    }
    
}


export const getPosts = ()=>async (dispatch)=>{
    const posts = await axios.get('http://localhost:5000/post/posts');
    console.log(posts.data)
    dispatch({type:GET_POSTS,payload:posts.data});
    localStorage.setItem('posts',JSON.stringify(posts.data));
}

export const getUserPosts = (userId)=>async (dispatch)=>{
    const posts = await axios.post('http://localhost:5000/post/userposts',{
        id:userId,
    });
    dispatch({type:GET_USER_POSTS,payload:posts.data});

    localStorage.setItem('userPosts',JSON.stringify([posts.data]));
}

export const removePost = (id)=>async (dispatch)=>{
    const posts = await axios.post('http://localhost:5000/post/removepost',{
        id:id,
    });
        localStorage.removeItem('userPosts');
    dispatch({type:REFRESH_USER_POSTS,payload:id});

}

export const updatePost = (id,postTitle,postSubject)=>async (dispatch)=>{
    const posts = await axios.put('http://localhost:5000/post/editpost',{
        _id:id,
        title:postTitle,
        subject:postSubject

    });
    //console.log(posts.data.post)
    //localStorage.removeItem('userPosts');
    //localStorage.removeItem('posts');
    //dispatch({type:REFRESH_POSTS,payload:posts.data.post });

}


