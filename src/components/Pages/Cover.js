import React from 'react';
import { Button } from '../../utils/utils';
import Context from '../../contexts/ReverbContext';
import ReverbTime from '../inputs/ReverbTime';

export default class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      customerName: '',
      projectName: '',
      date: '',
    };
  }

  static contextType = Context;

  updateCustomerName(name) {
    this.setState({ customerName: name });
    this.context.updateCustomerName(name);
    return name;
  }
  updateProjectName(name) {
    this.setState({ projectName: name });
    this.context.updateProjectName(name);
    return name;
  }
  updateDate(date) {
    this.setState({ date: date });
    this.context.updateDate(date);
    return date;
  }

  clearData() {
    this.setState({
      date: '',
      customerName: '',
      projectName: '',
    });
  }

  render() {
    return (
      <div className="sticky-top cover-page">
        <h2>Cover Page</h2>
        {this.state.isOpen && (
          <form onSubmit={this.handleSubmit} className="">
            <div className="inputs">
              <label htmlFor="LoginForm__user_name">Date:</label>
              <input
                type="date"
                onChange={(e) => {
                  this.updateDate(e.currentTarget.value);
                }}
                id="date"
                name="project-date"
                value={this.state.date}
              ></input>
            </div>

            <div className="inputs">
              <label htmlFor="LoginForm__customer_name">Customer:</label>
              <input
                type="text"
                onChange={(e) => {
                  this.updateCustomerName(e.currentTarget.value);
                }}
                id="customer-name"
                name="customer-name"
                value={this.state.customerName}
              />
            </div>
            <div className="inputs">
              <label htmlFor="LoginForm__project_name">Project:</label>
              <input
                type="text"
                onChange={(e) => {
                  this.updateProjectName(e.currentTarget.value);
                }}
                id="project-name"
                name="project-name"
                value={this.state.projectName}
              />
            </div>
            <button
              onClick={() => this.setState({ isOpen: !this.state.isOpen })}
            >
              next
            </button>
            {/* <Button onClick={this.clearData}>Clear Data</Button> */}
          </form>
        )}
        {!this.state.isOpen && (
          <div className="">
            <button
              className="editButton"
              onClick={() => this.setState({ isOpen: !this.state.isOpen })}
            >
              edit
            </button>
            <p>Date: {this.state.date}</p>
            <p>Customer Name: {this.state.customerName}</p>
            <p>Project Name: {this.state.projectName}</p>
          </div>
        )}
      </div>
    );
  }
}
