import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {FormGroup,Form,FormLabel,FormControl,Button} from 'react-bootstrap';
import {useHistory,Link} from 'react-router-dom'
import {updatePost} from '../dataStore/actions/postActions'

const Edit = (props) => {
    const user = useSelector(state => state);
    const userPosts = useSelector(state => state.userPosts.userPosts);
    const selectedPost= userPosts.filter(post=>post._id == props.match.params.id);

    console.log(selectedPost)



    const dispatch = useDispatch();
    const history = useHistory();
    const [post,setPost] = useState({
        title:selectedPost[0]?selectedPost[0].title:'',
        subject:selectedPost[0]?selectedPost[0].subject:''

      })

      const onSubmit = (event)=>{
        event.preventDefault();
        dispatch(updatePost(selectedPost[0]._id,post.title,post.subject));
        
       history.push('/');
        }

useEffect(() => {

  return () => {
    
  }
}, [])
    return (
        <div>
            <h6 style={{textAlign:'center'}}>Edit post</h6>
<Form className='form-newpost' onSubmit={onSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" value={post.title} placeholder="Enter the title" name='title' onChange={(e)=>{setPost({...post,[e.target.name]:e.target.value})}}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Text </Form.Label>
    <Form.Control as="textarea" value={post.subject} rows={12} name='subject' onChange={(e)=>{setPost({...post,[e.target.name]:e.target.value})}}/>
  </Form.Group>
  <div className='btns'>
      <Button variant="primary" type="submit">
    Save
  </Button>
  <Button variant="outline-danger" type="submit" style={{marginLeft:'5px'}}>
  <Link to='/' className='text-link'>Cancel</Link>
  </Button>  
  </div>

</Form>
        </div>
    )
}

export default Edit
