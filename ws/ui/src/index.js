import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserLoginPage } from './UserLoginPage';
import { UserSignUpPage } from './UserSignUpPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserLoginPage/>
  </React.StrictMode>
);




reportWebVitals();
