  
import {LOGIN,REGISTER_USER,LOGOUT_USER} from '../constants/userConstants';

export const userReducer = (state={userInfo:{},userPosts:[]},action)=>{
    switch(action.type){
    case LOGIN :
        return{
            ...state,
        userInfo:action.payload
        }

    
    case REGISTER_USER :
        return{
            ...state,userInfo:action.payload
        }

    case REGISTER_USER :
        return{
            ...state,
            userInfo:action.payload
        }
    case LOGOUT_USER :
        return{
            ...state,
            userInfo:{},
            

        }

    default : return state;
    }
    }