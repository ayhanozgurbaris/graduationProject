import React, { Component } from 'react';
import  {Link} from 'react-router-dom';

class TopBar extends Component {

    state={
        isLoggedIn: false
    }

    render() {

        const {isLoggedIn} = this.setState;

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
            links =(<ul>
                <li>Sign Out</li>
            </ul>)
  
            }
        



        return (
            <div className="shadow-sm bg-primary mb-3">
            <nav className="navbar navbar-light">
                <Link className="navbar-brand" to="/">
                    Socialize
                </Link>
                {links}
            </nav>
            </div>
        );
    }
}
export default TopBar;