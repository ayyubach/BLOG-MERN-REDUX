import React,{useState} from 'react'
import {FormGroup,Form,FormLabel,FormControl,Button} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import {createNewPost} from '../dataStore/actions/postActions';
import {useHistory,Link} from 'react-router-dom'

const NewPost = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const user =  useSelector(state => state.userInfo);

  const [post,setNewPost] = useState({
    title:'',
    subject:''
  })
  
  const onSubmit = (event)=>{
  event.preventDefault();
  dispatch(createNewPost(post.title,post.subject,user.userInfo._id));
  history.push('/');
  }

    return (
        <div>
            <h6 style={{textAlign:'center'}}>Add new post</h6>
<Form className='form-newpost' onSubmit={onSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Enter the title" name='title' onChange={(e)=>{setNewPost({...post,[e.target.name]:e.target.value})}}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Text </Form.Label>
    <Form.Control as="textarea" rows={12} name='subject' onChange={(e)=>{setNewPost({...post,[e.target.name]:e.target.value})}}/>
  </Form.Group>
  <div className='btns'>
      <Button variant="primary" type="submit">
    Save
  </Button>
  <Button variant="outline-danger"  style={{marginLeft:'5px'}}>
    <Link to='/' className='text-link'>Cancel</Link>
  </Button>  
  </div>

</Form>
        </div>
    )
}

export default NewPost
