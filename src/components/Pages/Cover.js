import React from 'react';
import { Button, Input } from '../../utils/utils';
import Context from '../../contexts/ReverbContext';

export default class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: '',
      projectName: '',
      date: '',
    };
  }

  static contextType = Context;

  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  updateCustomerName(name) {
    this.setState({ customerName: name });
    this.context.updateCustomerName(name);
    console.log('context updated: ', this.context.customerName);
    return name;
  }
  updateProjectName(name) {
    this.setState({ projectName: name });
    this.context.updatetProjectName(name);
    return name;
  }
  updateDate(date) {
    this.setState({ date: date });
    this.context.updateDate(date);
    return date;
  }

  render() {
    let customerName = this.state.customerName;
    let projectName = this.state.projectName;
    let date = this.state.date;

    return (
      <div className="light window">
        <h2>Cover Page</h2>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <div className="inputs">
            <label htmlFor="LoginForm__user_name">Date:</label>
            <input type="date" id="date" name="project-date"></input>
          </div>
          <div className="inputs">
            <label htmlFor="LoginForm__customer_name">Customer name:</label>
            <input
              type="text"
              onChange={(e) => {
                this.updateCustomerName(e.currentTarget.value);
              }}
              id="customer-name"
              name="customer-name"
            />
          </div>
          <div className="inputs">
            <label htmlFor="LoginForm__project_name">Project name:</label>
            <Input required name="user_name" id="LoginForm__user_name"></Input>
          </div>
          <Button>Clear-NYI</Button>
          {/* <button
            className="red window buttons"
            type="submit"
            onClick={(e) => {
              customerName = this.updateCustomerName(customerName);
              date = this.state.date;
              this.handleSubmit(e, customerName);
            }}
          >
            Submit
          </button> */}
        </form>
      </div>
    );
  }
}
