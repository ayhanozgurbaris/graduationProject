import React from 'react';
import defaultPicture from './profile.png'

const UserItemList = props =>{
    const { user } = props;

    let imageSource = defaultPicture;
    if(user.image){
        imageSource = user.image;
    }

 
        return (
            <div className='list-group-item list-group-item-action'>
                <img width={32} alt={`${user.username} profile`} src={imageSource}/>
                    {user.username}
            </div>
        );
    

}



export default UserItemList;

