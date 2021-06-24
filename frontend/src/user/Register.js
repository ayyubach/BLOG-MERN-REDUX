import React,{useState} from 'react'
import {FormGroup,Form,FormLabel,FormControl,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import { registerUser } from '../dataStore/actions/userActions';
import {useHistory} from 'react-router-dom'

const Register = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const user =  useSelector(state => state);
  console.log(user)

const [userInfos,setUserInfos] = useState({
  email:'',
  password:''
})

const onSubmit = (event)=>{
event.preventDefault();
dispatch(registerUser(userInfos.email,userInfos.password));
history.push('/');
}

    return (
        <div>
            <h6 style={{textAlign:'center'}}>Register New User</h6>
            <Form className='form-newpost' onSubmit={onSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="text" placeholder="Enter the email" name='email' 
    onChange={(e)=>{setUserInfos({...userInfos,[e.target.name]:e.target.value})}} />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password </Form.Label>
    <Form.Control type="password" placeholder="Enter the password" name='password'
    onChange={(e)=>{setUserInfos({...userInfos,[e.target.name]:e.target.value})}}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Confirm Password </Form.Label>
    <Form.Control type="password" placeholder="Enter the password" name='password2'
    onChange={(e)=>{setUserInfos({...userInfos,[e.target.name]:e.target.value})}}/>
  </Form.Group>
  <div className='btns'>
      <Button variant="primary" type="submit">
    Register
  </Button>
  <h6 style={{marginTop:'5px'}}>Already have account ? <Link to='/login'>Click Here</Link></h6>
  </div>

</Form>
        </div>
    )
}

export default Register
