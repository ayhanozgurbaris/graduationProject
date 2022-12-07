import React from 'react';
import { login } from './apiCall';
import Input from './Input';


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

        const { username, password, error } = this.state;

        return (    

        <div className='container'>
        <form>
            <h1>Login</h1>
            <div>
                    {/* <label className='username'>Username</label>
                    <input onChange={this.onChangeUsername}></input> */}
                    <Input label={'Username'} name="username" onChange={this.onChangeUsername} />
            </div>
      
            <div>
                {/* <label>Password</label>
                <input type="password" onChange={this.onChangePassword}></input> */}
                 <Input label={'Password'} name="password" type="password" onChange={this.onChangePassword } />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>

            <button onClick={this.onClickLogin} >Log In</button>

        </form>
        </div>


// <div className="container">
// <form>
//   <h1 className="text-center">{t('Login')}</h1>
//   <Input label={t('Username')} name="username" onChange={this.onChange} />
//   <Input label={t('Password')} name="password" type="password" onChange={this.onChange} />
//   {error && <div className="alert alert-danger">{error}</div>}
//   <div className="text-center">
//     <ButtonWithProgress
//       onClick={this.onClickLogin}
//       disabled={!buttonEnabled || pendingApiCall}
//       pendingApiCall={pendingApiCall}
//       text={t('Login')}
//     />
//   </div>
// </form>
// </div>

        


    
        );
    }
}

