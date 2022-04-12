import React from 'react';
import { Link, Route } from 'react-router-dom';

import TokenService from '../services/token-service';
import Context from '../contexts/ApiContext';
import RegistrationPage from './RegistrationPage';
import LoginPage from './LoginPage';
import logo from '../images/Lamvin Logo.png';

export default class NavWindow extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  static contextType = Context;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.setLogin(false);

    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <h3 className="welcome center-text">
          Welcome, {this.context.loggedInUser}
        </h3>
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Route exact path={'/'}>
          <Link to="/login">Log In</Link>
        </Route>
        <Route path={'/register'} component={RegistrationPage} />
        <Route path={'/login'} component={LoginPage} />
      </div>
    );
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  };

  render() {
    return (
      <nav className="nav window">
        <h1 className="">Reverb</h1>
        <img src={logo} alt="Logo" className="logo" />

        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}
