import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {LogIn} from './login/login';
import {Registrer} from './registrer/registrer';
import {Home} from './landing/home';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route  path='/home' component={Home} />
            <Route  path='/login' component={LogIn}/>
            <Route  path='/registrer' component={Registrer}/>
            <Redirect from="/" to="/home" />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
