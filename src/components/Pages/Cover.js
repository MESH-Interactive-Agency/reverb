import React from 'react';
import { Button} from '../../utils/utils';
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
      <div className="light window">
        <h2>Cover Page</h2>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <div className="inputs">
            <label htmlFor="LoginForm__user_name">Date:</label>
            <input
              type="date"
              onChange={(e) => {
                this.updateDate(e.currentTarget.value);
              }}
              id="date"
              name="project-date"
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
            />
          </div>

          <Button onClick={this.clearData}>Clear Data</Button>
        </form>
      </div>
    );
  }
}
