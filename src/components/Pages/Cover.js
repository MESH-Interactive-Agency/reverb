import React from 'react';
import Context from '../../contexts/ApiContext';
import val from '../../utils/val';

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

  handleFocus = (event) => event.target.select();

  render() {
    return (
      <div className=" card  cover-page">
        <div className="card-header">
          <h4 className="card-title">Project Info</h4>
        </div>
        {this.state.isOpen && (
          <div className="card-body">
            <form onSubmit={this.handleSubmit} className="form-horizontal">
              <div className=" row">
                <label
                  className="col-md-3 col-form-label"
                  htmlFor="LoginForm__user_name"
                >
                  Date:
                </label>
                <div className="form-group">
                  <input
                    onFocus={(e) => {
                      this.handleFocus(e);
                    }}
                    type="date"
                    className="form-control datepicker"
                    onChange={(e) => {
                      this.updateDate(e.currentTarget.value);
                    }}
                    id="date"
                    name="project-date"
                    value={this.state.date}
                  ></input>
                </div>
              </div>

              <div className="row">
                <label
                  className="col-md-3 col-form-label"
                  htmlFor="LoginForm__customer_name"
                >
                  Customer:
                </label>
                <div className="form-group">
                  <input
                    onFocus={(e) => {
                      this.handleFocus(e);
                    }}
                    className="form-control"
                    type="text"
                    placeholder="Customer Name"
                    onChange={(e) => {
                      this.updateCustomerName(
                        val.TextNoSpecNoNum(e.currentTarget.value)
                      );
                    }}
                    id="customer-name"
                    name="customer-name"
                    value={this.state.customerName}
                  />
                </div>
              </div>

              <div className="row">
                <label
                  className="col-md-3 col-form-label"
                  htmlFor="LoginForm__project_name"
                >
                  Project:
                </label>
                <div className="form-group">
                  <input
                    onFocus={(e) => {
                      this.handleFocus(e);
                    }}
                    className="form-control"
                    type="text"
                    placeholder="Project Name"
                    onChange={(e) => {
                      this.updateProjectName(
                        val.TextNoSpecNoNum(e.currentTarget.value)
                      );
                    }}
                    id="project-name"
                    name="project-name"
                    value={this.state.projectName}
                  />
                </div>
              </div>

              {/* <div className="card-footer ">
                <div className="row">
                  <label className="col-md-3"></label>
                  <div className="col-md-9">
                    <button type="submit" className="btn btn-info btn-round">Submit</button>
                  </div>
                </div>
              </div> */}

              {/* <button
              className="cover-button"
              onClick={() => this.setState({ isOpen: !this.state.isOpen })}
            >
              Next
            </button> */}
            </form>
          </div>
        )}
        {/* {!this.state.isOpen && (
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
        )} */}
      </div>
    );
  }
}
