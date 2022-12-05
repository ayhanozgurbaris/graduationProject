import React, { Component } from 'react';
import { Last } from 'react-bootstrap/esm/PageItem';
import { getUsers } from './apiCall';
import UserItemList from './UserItemList';

class UserList extends Component {

    state ={
        currentPage:{
            content:[],
            size:3,
            number: 0
        }
    }

    componentDidMount(){
        getUsers().then(response =>{
            this.setState({
                currentPage: response.data
            }
            );
        })
    }

    onClickNext= ()=>{
        const nextPage = this.state.currentPage.number +1;
        getUsers(nextPage).then(response=>{
            this.setState({
                currentPage: response.data
            })
        })
    }
    



    render() {
        const{content , last, first} = this.state.currentPage;
        return (
            <div className='card'>
                   <h3 className='card-header text center'>{'Users'}</h3>
                   <div className='list-group-flush'>
                {
                    content.map(user =>(<UserItemList key={user.username} user={user}/>))}
                
                </div>
                <div>
                    {last === false && (<button onClick={this.onClickNext}>Next</button>)}
                </div>
            </div>
        );
    }
}

export default UserList;



