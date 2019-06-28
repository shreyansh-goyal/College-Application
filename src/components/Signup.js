import React, { Component } from "react";
import axios from "axios";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //this.element = React.createRef();
  }

  signup = () => {
    console.log(this.state.password);
    console.log(this.state.emailId);
  };

  render() {
    return (
      <div>
        <div class="form-group input-block">
          <label>Teacher Id</label>
          <input
            type="text"
            ref="teacherId"
            onChange={() => {
              this.setState({ teacherId: this.refs.teacherId.value });
            }}
            class="form-control"
            placeholder="Enter Teacher Id"
            required
          />
        </div>
        <div class="form-group input-block">
          <label>Password</label>
          <input
            type="text"
            ref="password"
            onChange={() => {
              this.setState({ password: this.refs.password.value });
            }}
            class="form-control"
            placeholder="Enter Password"
            required
          />
        </div>

        <div class="form-group input-block">
          <button className="btn btn-info" onClick={this.signup}>
            Submit Student
          </button>
        </div>
      </div>
    );
  }
}
