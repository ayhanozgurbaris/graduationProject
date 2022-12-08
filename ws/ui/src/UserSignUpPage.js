import React from "react";
import axios from "axios";

export class UserSignUpPage extends React.Component{

    state = {
        username:null,
        displayName:null,
        aggredClicked:false,
        password:null,
        passwordRepeat:null
    }

     onChangeUsername = (event) => {
         this.setState({
            username:event.target.value
         })
        };

     onChangeAgree = (event) =>{
        this.setState({
            aggredClicked:event.target.checked
        })
     }


     onChangeDisplayName = (event) =>{
        this.setState({
            displayName:event.target.value
        })
     }

     onChangePassword = event =>{
        this.setState({
            password:event.target.value
        })
     }



     onClickSignUp = event =>{
        event.preventDefault();

        const body = {
            username:this.state.username ,
            displayName:this.state.displayName ,
            password: this.state.password
         };
         
        axios.post('/api/1.0/users',body);
     };





    render(){

    
       return (

        <form className="nav-link">
            <h1>Sign Up</h1>
            <div>
                <label>Username</label>
                <input onChange={this.onChangeUsername}></input>
            </div>

            <div>
                <label>Display Name</label>
                <input onChange={this.onChangeDisplayName}></input>
            </div>

            <div>
                <label>Password</label>
                <input type="password" onChange={this.onChangePassword}></input>
            </div>

            <input type="checkbox" onChange={this.onChangeAgree}></input>Agreed
            
            <div>
                <button onClick={this.onClickSignUp} disabled={!this.state.aggredClicked}>Sign Up</button>
            </div>
            

        </form>
        
       );
    }

}