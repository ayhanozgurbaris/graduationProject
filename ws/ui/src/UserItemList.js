import React from 'react';
import defaultPicture from './profile.png'
import { Link } from 'react-router-dom';

const UserItemList = props =>{
    const { user } = props;
    const {username,displayName,image}  = user;

    let imageSource = defaultPicture;
    if(image){
        imageSource = user.image;
    }

 
        return (
            <Link to={`/user/${username}`} className='list-group-item list-group-item-action'>
                <img width={32} alt={`${username} profile`} src={imageSource}/>
                {displayName}@{username}
            </Link>
        );
    

}



export default UserItemList;

