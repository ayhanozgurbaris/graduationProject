import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserLoginPage } from './UserLoginPage';
import { UserSignUpPage } from './UserSignUpPage';
import HomePage from './HomePage';
import UserPage from './UserPage';
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom';
import TopBar from './TopBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <HashRouter>
    <TopBar/>
    <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/login" component={UserLoginPage}/>
    <Route path="/signup" component={UserSignUpPage}/>
    <Route path="/user/:username" component={UserPage}/>
    <Redirect to="/"/>
    </Switch>
    </HashRouter>
  
);




reportWebVitals();
