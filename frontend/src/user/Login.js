import React,{useState,useEffect} from 'react'
import {FormGroup,Form,FormLabel,FormControl,Button,Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import {logIn} from '../dataStore/actions/userActions'
import {useHistory} from 'react-router-dom'

const Login = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const user =  useSelector(state => state.userInfo);
  //console.log(user.userInfo.error)

const [userInfos,setUserInfos] = useState({
  email:'',
  password:''
})

const onSubmit = (event)=>{
event.preventDefault();
dispatch(logIn(userInfos.email,userInfos.password));
}

useEffect(() => {
  if(user.userInfo.email){
   history.push('/');
  }

}, [user])



    return (
        <div>
            <h6 style={{textAlign:'center'}}>Login</h6>
            <Form className='form-newpost' onSubmit={onSubmit}>
  <Form.Group controlId="formBasicEmail">
    {user.userInfo.error?( <Alert  variant='danger'>{user.userInfo.error}</Alert>):(null)}
    <Form.Label>Email</Form.Label>
    <Form.Control type="text" placeholder="Enter the email" name='email' 
    onChange={(e)=>{setUserInfos({...userInfos,[e.target.name]:e.target.value})}} />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password </Form.Label>
    <Form.Control type="password" placeholder="Enter the password" name='password'
    onChange={(e)=>{setUserInfos({...userInfos,[e.target.name]:e.target.value})}}/>
  </Form.Group>
  <div className='btns'>
      <Button variant="primary" type="submit">
    Log in
  </Button>
  <h6 style={{marginTop:'5px'}}>Forgot your password ? <Link to='/'>Click Here</Link></h6>
  </div>

</Form>
        </div>
    )
}

export default Login
