import React, { Component } from "react";
import axios from "axios";

class AddTeachers extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    teacher: {}
  };
  submitDetails = () => {
    axios
      .post(`https://bpitconnect.herokuapp.com/teachers`, this.state.teacher)
      .then(data => {
        console.log("post request is successful");
        alert("Teacher is added successfully");
      })
      .catch(err => {
        console.log("this error is occured", err);
      });
  };
  render() {
    return (
      <div>
        <div class="form-group input-block">
          <label>Teacher Id</label>
          <input
            type="text"
            ref="teacherId"
            onChange={this.setState(() => {
              this.state.teacher.teacherId = this.refs.teacherId.value;
            })}
            class="form-control"
            placeholder="Enter Teacher Id"
          />
        </div>
        <div class="form-group input-block">
          <label>Name</label>
          <input
            type="text"
            ref="teacherName"
            onChange={this.setState(() => {
              this.state.teacher.teacherName = this.refs.teacherName.value;
            })}
            class="form-control"
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group input-block">
          <label>Phone No</label>
          <input
            type="text"
            ref="teacherPhone"
            onChange={this.setState(() => {
              this.state.teacher.teacherPhone = this.refs.teacherPhone.value;
            })}
            class="form-control"
            placeholder="Enter Phone no"
          />
        </div>
        <div class="form-group input-block">
          <label>Email Id</label>
          <input
            type="text"
            ref="teacherEmail"
            onChange={this.setState(() => {
              this.state.teacher.teacherEmail = this.refs.teacherEmail.value;
            })}
            class="form-control"
            placeholder="Enter Email Id"
          />
        </div>
        <div class="form-group input-block">
          <label>Official Email Id</label>
          <input
            type="text"
            ref="officialEmailId"
            onChange={this.setState(() => {
              this.state.teacher.officialEmailId = this.refs.officialEmailId.value;
            })}
            placeholder="Official email id"
            class="form-control"
          />
        </div>
        <div class="form-group input-block">
          <label>Joining Date</label>
          <input
            type="date"
            ref="joiningDate"
            onChange={this.setState(() => {
              this.state.teacher.joiningDate = this.refs.joiningDate.value;
            })}
            placeholder="Joning date"
            class="form-control"
          />
        </div>
        <div class="form-group input-block">
          <button className="btn btn-info" onClick={this.submitDetails}>
            Submit Teacher Details
          </button>
        </div>
      </div>
    );
  }
}
export default AddTeachers;
