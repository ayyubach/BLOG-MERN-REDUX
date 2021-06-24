  
import {NEW_POST,GET_POSTS,GET_USER_POSTS,REFRESH_USER_POSTS,REFRESH_POSTS ,CLEAR_USERPOSTS} from '../constants/postConstants';

export const postReducer = (state={posts:[],userPosts:[]},action)=>{
    switch(action.type){
    case NEW_POST :
        return{
            ...state,
        posts:[...state.posts,action.payload]
        }

    case GET_POSTS :
        return{
            ...state,
            posts:[...action.payload]

        }
    case GET_USER_POSTS:
        return{
            ...state,
            userPosts:[...action.payload],
        }

        case REFRESH_USER_POSTS:
        return{
            ...state,
            userPosts:[...state.userPosts.filter(post=>post._id !== action.payload)]
            
        }

        case REFRESH_POSTS :
             
             const getuserpost = state.userPosts.map(post=>{
                if(post._id == action.payload._id){
                 post.title = action.payload.title;
                 post.subject = action.payload.subject;
                 return post;
                }
                return post;
            })  
             console.log(getuserpost);
            return{
                ...state,
                userPosts : []
                    
                
            }

        case CLEAR_USERPOSTS :
            return{
                ...state,
                userPosts:[]
            }
    

    default : return state;
    }
    }

    