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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/login" component={UserLoginPage}/>
    <Route path="/signup" component={UserSignUpPage}/>
    <Route path="/user/:username" component={UserPage}/>
    <Redirect to={"/"}/>
    </Switch>
    </HashRouter>
  </React.StrictMode>
);




reportWebVitals();
