import React,{Component} from 'react';
import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Navbar from './Components/layout/NavBar';
import Dashboard from './Components/dashboard/dashboard';
import Projectdetails from './Components/projects/Projectdetails'
import Signin from './Components/auth/Signin';
import Signup from './Components/auth/Signup';
import CreateProject from './Components/projects/createProject'
class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/projects/:id' component={Projectdetails} />
            <Route path='/Signin' component={Signin} />
            <Route path='/Signup' component={Signup} />
            <Route path='/Create' component={CreateProject} />
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
