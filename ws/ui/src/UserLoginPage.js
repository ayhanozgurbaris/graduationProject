import axios from 'axios';
import React from 'react';


export class UserLoginPage extends React.Component {


    state = {
        username:null,
        password:null,
    }


    onChangeUsername = (event) => {
        this.setState({
           username:event.target.value
        })
       };

    onChangePassword = (event) =>{
        this.setState({
            password:event.target.value
        })
     }


     onClickLogin = event =>{
        event.preventDefault();

        const creds = {
            username:this.state.username ,
            password: this.state.password
         };
         try {
            axios.post('/api/1.0/auth',{},{auth : creds});
            this.props.history.push('/')
         } catch (error) {
            
         }
         
     };



    render(){
        return (

        <form>
            <h1>Login</h1>
            <div>
                    <label>Username</label>
                    <input onChange={this.onChangeUsername}></input>
            </div>

            
            <div>
                <label>Password</label>
                <input type="password" onChange={this.onChangePassword}></input>
            </div>


            <button onClick={this.onClickLogin} >Log In</button>

        </form>
    
        );
    }
}

