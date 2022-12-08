import React from 'react';
import { UserSignUpPage } from './UserSignUpPage';
import { UserLoginPage } from './UserLoginPage';
import HomePage from './HomePage';
import UserPage from './UserPage';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import TopBar from './TopBar';

class App extends React.Component {
  state = {
    isLoggedIn: false,
    username: undefined
  };

  onLoginSuccess = username => {
    this.setState({
      username,
      isLoggedIn: true
    });
  };

  onLogoutSuccess = () => {
    this.setState({
      isLoggedIn: false,
      username: undefined
    });
  };

  render() {
    const { isLoggedIn, username } = this.state;

    return (
      <div>
        <HashRouter>
          <TopBar username={username} isLoggedIn={isLoggedIn} onLogoutSuccess={this.onLogoutSuccess} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            {!isLoggedIn && (
              <Route
                path="/login"
                component={props => {
                  return <UserLoginPage {...props} onLoginSuccess={this.onLoginSuccess} />;
                }}
              />
            )}
            <Route path="/signup" component={UserSignUpPage} />
            <Route path="/user/:username" component={UserPage} />
            <Redirect to="/" />
          </Switch>
        </HashRouter>
        
      </div>
    );
  }
}

export default App;
