import React from 'react';
import Input from './Input';
import axios from 'axios';

const login = creds =>{
    return axios.post(`/api/1.0/auth`,{},{auth:creds})
}


export class UserLoginPage extends React.Component {


    state = {
        username:null,
        password:null,
        error:null
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


     onClickLogin =async event =>{
        event.preventDefault();
        const{username,password} = this.state;
        const creds = {
            username,
            password
        };
        const {push}= this.props.history;

        this.setState({
            error:null
        });
        try {
            await login(creds);
            push('/')
        } catch (apiError) {
            this.setState({
                error:apiError.response.data.message
            })
        }        
     };


     



    render(){

        const { error } = this.state;

        return (    

        <div className='container'>
        <form>
            <h1>Login</h1>
            <div>
                    
                    <Input label={'Username'} name="username" onChange={this.onChangeUsername} />
            </div>
      
            <div>
                 <Input label={'Password'} name="password" type="password" onChange={this.onChangePassword } />
                {error && <div className="alert alert-warning">{error}</div>}
            </div>

            <button onClick={this.onClickLogin} >Log In</button>

        </form>
        </div>



    
        );
    }
}

