import React, { Component } from 'react';
import  {Link} from 'react-router-dom';

class TopBar extends Component {
    render() {
        return (
            <div className="shadow-sm bg-primary mb-4">
            <nav className="navbar navbar-light container">
                <Link className="navbar-brand" to="/">
                    Socialize
                </Link>

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
            </nav>
            </div>
        );
    }
}
export default TopBar;