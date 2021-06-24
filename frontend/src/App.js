import Navbar from './Navabar'
import './App.css';
import {Route} from 'react-router-dom';
import Login from './user/Login';
import Index from './user/Index';
import NewPost from './user/NewPost';
import Register from './user/Register';
import Account from './user/Account'
import Edit from './user/Edit';

function App() {

  return (    
  
    <div >

      <header >
        <Navbar />
      </header>
   <Route path='/' component={Index} exact/>
   <Route path='/login' component={Login} exact/>
   <Route path='/newpost' component={NewPost} exact/>
   <Route path='/posts' component={Index} exact/>
   <Route path='/register' component={Register} exact/>
   <Route path='/account' component={Account} exact/>
   <Route path='/edit/:id?' component={Edit} exact/>


    </div>

  );
}

export default App;
