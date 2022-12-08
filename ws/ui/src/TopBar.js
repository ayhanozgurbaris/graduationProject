import React, { Component } from 'react';
import  {Link} from 'react-router-dom';

class TopBar extends Component {

    render() {

        const {isLoggedIn,username,onLogoutSuccess} = this.props;

        let links =(
            
            <ul className='navbar-nav'>
            <li>
                <Link className="nav-link" to="/login">
                Login
                </Link>
            </li>

            <li>
            <Link className="nav-link" to="/signup">
                Sign up
            </Link>
            </li>
        </ul>
        );
        if (isLoggedIn){
            links =(
            <ul className="navbar-nav">
                <li><Link className='nav-link' to={`/user/${username}`}>{username}</Link></li>

                <li onClick={onLogoutSuccess} style={{cursor:'pointer'}}>LogOut</li>
            </ul>
            )
  
            }
        



        return (
            <div className="shadow-sm bg-primary mb-3">
            <nav className="navbar navbar-light">
                <Link className="nav-link navbar-brand" to="/">
                    Socialize
                </Link>
                {links}
            </nav>
            </div>
        );
    }
}
export default TopBar;