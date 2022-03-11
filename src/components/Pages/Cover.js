import React from 'react';
import { Button, Input } from '../../utils/utils';

import Context from '../../contexts/ApiContext';

export default class Cover extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="light window">
        <h2>Cover Page</h2>
        <br></br>
        <form>
          <div className="inputs">
            <label htmlFor="LoginForm__user_name">Date:</label>
            <input
              type="date"
              id="date"
              name="project-date"
              value="2018-07-22"
              min="2018-01-01"
              max="2018-12-31"
            ></input>
          </div>
          <div className="inputs">
            <label htmlFor="LoginForm__customer_name">Customer name:</label>
            <Input required name="user_name" id="LoginForm__user_name"></Input>
          </div>
          <div className="inputs">
            <label htmlFor="LoginForm__project_name">Project name:</label>
            <Input required name="user_name" id="LoginForm__user_name"></Input>
          </div>
          <Button>Clear (NYI)</Button>
        </form>
      </div>
    );
  }
}
