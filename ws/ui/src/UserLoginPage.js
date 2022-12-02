import React, { Component } from 'react';

export class UserLoginPage extends Component {


    state = {
        username:null,
        password:null,
    }


    onChangeUsername = (event) => {
        this.setState({
           username:event.target.value
        })
       };

    onChangePassword = event =>{
        this.setState({
            password:event.target.value
        })
     }


     onClickSignUp = event =>{
        event.preventDefault();

        const body = {
            username:this.state.username ,
            password: this.state.password
         };
         
     }




    render() {
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



            <button>Login</button>

            </form>
    
        );
    }
}

