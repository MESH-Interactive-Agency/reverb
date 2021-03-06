import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AuthApiService from '../../services/auth-api-service';
import { Button, Input, Required } from '../../utils/utils';

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { full_name, user_name, password } = ev.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value,
    })
      .then((user) => {
        full_name.value = '';
        user_name.value = '';
        password.value = '';
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="RegistrationForm " onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="full_name inputs">
          <label htmlFor="RegistrationForm__full_name">
            Full name <Required />
          </label>
          <Input
            name="full_name"
            type="text"
            required
            id="RegistrationForm__full_name"
          ></Input>
        </div>
        <div className="user_name inputs">
          <label htmlFor="RegistrationForm__user_name">
            User name <Required />
          </label>
          <Input
            name="user_name"
            type="text"
            required
            id="RegistrationForm__user_name"
          ></Input>
        </div>
        <div className="password inputs">
          <label htmlFor="RegistrationForm__password">
            Password <Required />
          </label>
          <Input
            name="password"
            type="password"
            required
            id="RegistrationForm__password"
          ></Input>
        </div>
        <Button className="green window" type="submit">
          Register
        </Button>
        <p>
          Have an account already? <Link to="login">Login</Link> here!
        </p>
      </form>
    );
  }
}
