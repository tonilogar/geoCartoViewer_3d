import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'
import { Map } from './components/Map';
import { Tools } from './components/Tools';
import { User } from './components/User';
import { Perspective } from './components/Perspective'
import { Info } from './components/Info'
import Layers from './components/Layers'
import SignIn from './components/SignIn'
import ForgotPass from './components/ForgotPass'
import { SignUp } from './components/SignUp'
import { Props } from './components/Props' 
import { Children } from './components/Children' 



function App() {
  return (
    <React.Fragment>
      <Router className = 'App'>
        <Props palabra = "Props"/>
        <Children >
          Children
        </Children> 
        <Route exact path="/" component={Map}/>
        <Route exact path="/" component={Tools}/>
        <Route exact path="/" component={User}/>
        <Route exact path="/" component={Perspective}/>
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