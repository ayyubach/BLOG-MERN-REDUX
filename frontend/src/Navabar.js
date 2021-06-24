import React from 'react'
import {Navbar,Button,DropdownButton,DropdownItem,Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import {logOut} from './dataStore/actions/userActions'

const Navabar = () => {

    const dispatch = useDispatch();
    const user =  useSelector(state => state.userInfo);
    console.log(user)
    return (
<Navbar>
    
    <div className='logo'><Link to='/' className='text-link'>Blog<span className='logoName'>App</span></Link></div>
    <div className='navbtns'>
    <Button className='Button' href='/'>Posts</Button>
    {user.userInfo.email?(<Button href='/newpost'>New Post</Button>):(null)}
    {user.userInfo.email?(null):(<Button href='/register'>SignUp</Button>)}
    {user.userInfo.email?(
        <>
    <DropdownButton id="dropdown-basic-button" title={user.userInfo.email}>
  <Dropdown.Item onClick={()=>dispatch(logOut())}>Logout</Dropdown.Item>
  <Dropdown.Item href="/account">My Account</Dropdown.Item>
</DropdownButton>
</>
    ):(<Button href='/login'>Log In</Button>)}
    </div>
</Navbar>
    )
}

export default Navabar;
