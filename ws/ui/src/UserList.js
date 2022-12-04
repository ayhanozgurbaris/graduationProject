import React, { Component } from 'react';
import { getUsers } from './apiCall';

class UserList extends Component {

    state ={
        users:[]
    }

    componentDidMount(){
        getUsers().then(response =>{
            this.setState({
                users: response.data
            }
            );
        })
    }

    render() {
        const{users} = this.state;
        return (
            <div>
                {
                    users.map(function(user,index){
                        return (
                            <div key={index}>
                                {user.username}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default UserList;