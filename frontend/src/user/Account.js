import React,{useEffect} from 'react'
import {getUserPosts,removePost} from '../dataStore/actions/postActions'
import {useDispatch,useSelector} from 'react-redux'
import { ListGroup,ListGroupItem,Button } from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'

const Account = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const userPosts = useSelector(state => state.userPosts.userPosts);
    const user =  useSelector(state => state.userInfo);

    //console.log(userPosts)
    useEffect(() => {
        if(!user.userInfo.email){
            history.push('/login');
        }
        dispatch(getUserPosts(user.userInfo._id));
        return () => {
            
        }
    }, [])
    return (
        <div>
           <h4 style={{textAlign:'center'}}>My Account </h4>
           {userPosts?(userPosts.map(post=>(
                          <ListGroup>
                          <ListGroup.Item className='d-flex'><div style={{width:'70%'}}><h6 >{post.title}</h6></div>
                          <div className='account-btns' style={{width:'29%',textAlign:'center'}}>
                        <Button onClick={()=>dispatch(removePost(post._id))}>Delete</Button>
                        <Button><Link to={`/edit/${post._id}`} className='text-link'>Edit</Link></Button></div>
                          </ListGroup.Item>
                          
                          </ListGroup>
           ))):(null)}
        </div>
    )
}

export default Account
