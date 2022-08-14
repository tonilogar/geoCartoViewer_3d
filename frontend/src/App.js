import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {ForgotPass} from './components/ForgotPass/ForgotPass'
import { Info } from './components/Info/Info'
import { Layers } from './components/Layers/Layers'
import { Map } from './components/Map/Map';
import { SignIn } from './components/SignIn/SignIn'
import { SignUp } from './components/SignUp/SignUp'
import { Tools } from './components/Tools/Tools'
import { User } from './components/User/User'


function App() {

  return (
    <React.Fragment>
      <Router className = 'App'>
        {/* <Props palabra = "Props"/>
        <Children >
          Children
        </Children>  */}
        <Route exact path="/" component={Map}></Route>
        <Route exact path="/" component={Tools}/>
        <Route exact path="/" component={User}/>
        <Route exact path="/" component={Info}/>
        <Route exact path="/" component={Layers}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/forgotpass" component={ForgotPass}/>
        <Route exact path="/signup" component={SignUp}/> 
      </Router>
    </React.Fragment>
);
}

export { App } ;