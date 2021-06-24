import {createStore,applyMiddleware,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer';
import { postReducer } from './reducers/postReducer';

const initialState = {
    userInfo:{
        userInfo:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):{},
    },
    posts:{
        posts:localStorage.getItem('posts')?JSON.parse(localStorage.getItem('posts')):[],
        
    },
    userPosts:{
        userPosts:localStorage.getItem('userPosts')?JSON.parse(localStorage.getItem('userPosts'))[0]:[],
    }
    }

const reducers = combineReducers({
        userInfo:userReducer,
        posts:postReducer,
        userPosts:postReducer
     })

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(reducers,initialState,composeEnhancer(applyMiddleware(thunk)));

export default Store ;