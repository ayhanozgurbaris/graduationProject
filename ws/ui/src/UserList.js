import React, { Component } from 'react';
import { getUsers } from './apiCall';
import UserItemList from './UserItemList';

class UserList extends Component {

    state ={
        page:{
            content:[],
            size:3,
            number: 0
        }
    }

    componentDidMount(){
        getUsers().then(response =>{
            this.setState({
                page: response.data
            }
            );
        })
    }

    render() {
        const{content} = this.state.page;
        return (
            <div className='card'>
                   <h3 className='card-header text center'>{'Users'}</h3>
                   <div className='list-group-flush'>
                {
                    content.map(user =>(<UserItemList key={user.username} user={user}/>))}
                
                </div>
            </div>
        );
    }
}

export default UserList;



