import React from 'react';
import { Button } from '../../utils/utils';
import Context from '../../contexts/ReverbContext';
import ReverbTime from '../inputs/ReverbTime';
import Dimensions from '../inputs/Dimensions';

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
      <div className="sticky-top cover-page ">
        <h5>Project Info</h5>
        {this.state.isOpen && (
          <form onSubmit={this.handleSubmit} className="">
            <div className="inputs cover-inputs">
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

            <div className="inputs cover-inputs">
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
            <div className="inputs cover-inputs">
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

            <Dimensions />
            {/* <button
              className="cover-button"
              onClick={() => this.setState({ isOpen: !this.state.isOpen })}
            >
              Next
            </button> */}
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
            <p>Room Dimensions:</p>
            <p>Length: {this.context.length}</p>
            <p>Width: {this.context.width}</p>
            <p>Height: {this.context.height}</p>
            <p>
              Total Volume:{' '}
              {this.context.length * this.context.width * this.context.height}
            </p>
          </div>
        )}
      </div>
    );
  }
}
