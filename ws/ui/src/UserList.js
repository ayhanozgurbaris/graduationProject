import React, { Component } from 'react';
import { Last } from 'react-bootstrap/esm/PageItem';
import UserItemList from './UserItemList';
import axios from 'axios';

const getUsers = (currentPage = 0, pageSize = 10)=>{
    return axios.get(`/api/1.0/users?currentPage=${currentPage}&pageSize=${pageSize}`);
}


class UserList extends Component {

    state ={
        currentPage:{
            content:[],
            size:3,
            number: 0
        }
    }

    componentDidMount(){
        this.loadUsers();
    }

    onClickNext= ()=>{
        const nextPage = this.state.currentPage.number +1;
        this.loadUsers(nextPage)
    }

    onClickPrevious= ()=>{
        const previousPage = this.state.currentPage.number -1;
        this.loadUsers(previousPage)
    }


    loadUsers = currentPage =>{
        getUsers(currentPage).then(response=>{
            this.setState({
                currentPage:response.data
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
                    {first === false && (<button onClick={this.onClickPrevious}>Previous</button>)}
                </div>



                <div>
                    {last === false && (<button onClick={this.onClickNext}>Next</button>)}
                </div>
            </div>
        );
    }
}

export default UserList;



