import React from "react";
import axios from "axios";

const signup = (body)=>{
    return axios.post('/api/1.0/users',body);
}

export class UserSignUpPage extends React.Component{

    state = {
        username:null,
        displayName:null,
        aggredClicked:false,
        password:null,
        pendingApiCall:false,
        errors:{}
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



     onClickSignUp =async event =>{
        event.preventDefault();

        const body = {
            username:this.state.username ,
            displayName:this.state.displayName ,
            password: this.state.password, 
         };

         this.setState({pendingApiCall:true});

        try {
            const response = await signup(body);
        } catch (error) {
            this.setState({errors:error.response.data.validationErrors})
        }
        this.setState({pendingApiCall:false});
       
     };





    render(){

        const {pendingApiCall,errors} = this.state;
        const {username,displayName,password} = errors;

    
       return (

        <form className="nav-link">
            <h1>Sign Up</h1>
            <div className="form-group">
                <label>Username</label>
                <input className={ username ? "form-control is-invalid" : "form-control"} onChange={this.onChangeUsername}></input>
                <div className="invalid-feedback">{username}</div>
            </div>

            <div className="form-group">
                <label>Display Name</label>
                <input className={ displayName ? "form-control is-invalid" : "form-control"} onChange={this.onChangeDisplayName}></input>
                <div className="invalid-feedback">{displayName}</div>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input className={ password ? "form-control is-invalid" : "form-control"} type="password" onChange={this.onChangePassword}></input>
                <div className="invalid-feedback">{password}</div>
            </div>

            <input type="checkbox" onChange={this.onChangeAgree}></input>Agreed
            
            <div className="form-group">
                <button onClick={this.onClickSignUp} disabled={!this.state.aggredClicked}>Sign Up</button>
            </div>
            

        </form>
        
       );
    }

}