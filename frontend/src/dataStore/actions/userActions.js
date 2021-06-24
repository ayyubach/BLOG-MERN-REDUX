import axios from 'axios';
import {LOGIN,REGISTER_USER,LOGOUT_USER} from '../constants/userConstants';
import {CLEAR_USERPOSTS} from '../constants/postConstants';

export const logIn =  (userEmail,userPassword)=>async (dispatch)=>{

    const userInfo = await axios.post('http://localhost:5000/user/getuser',{
        email:userEmail,
        password:userPassword
    })
    //console.log(userInfo.data)
    dispatch({type:LOGIN,payload:userInfo.data});
    if(!userInfo.data.error){
    localStorage.setItem('userInfo',JSON.stringify(userInfo.data));
    }
    
}

export const  registerUser = (userEmail,userPassword)=>async (dispatch)=>{
    const userRegistred = await axios.post('http://localhost:5000/user/register',{
        email:userEmail,
        password:userPassword
    });
    dispatch({type:REGISTER_USER,payload:userRegistred.data});
}


export const logOut = ()=>async (dispatch)=>{
   
    //console.log(userInfo.data)
    localStorage.removeItem('userInfo');
    localStorage.removeItem('userPosts');
    dispatch({type:LOGOUT_USER});
    dispatch({type:CLEAR_USERPOSTS});

    //localStorage.removeItem('userPosts');

}