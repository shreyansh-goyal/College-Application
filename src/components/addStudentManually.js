import React, { Component } from "react";
import axios from "axios";

class AddStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enrollmentNo: "",
      year: "",
      section: "",
      group: "",
      studentName: "",
      fatherName: "",
      motherName: "",
      phoneNo: "",
      fatherPhoneNo: "",
      emailId: "",
      fatherEmailId: ""
    };
    //this.element = React.createRef();
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.ref]: e.target.value });
  }

  submitDetails = () => {
    axios
      .post("https://bpitconnect.herokuapp.com/students", {
        rollNo: this.state.rollNo,
        enrollmentNo: this.state.enrollmentNo,
        year: this.state.year,
        section: this.state.section,
        group: this.state.group,
        studentName: this.state.studentName,
        fatherName: this.state.fatherName,
        motherName: this.state.motherName,
        phoneNo: this.state.phoneNo,
        fatherPhoneNo: this.state.fatherPhoneNo,
        emailId: this.state.emailId,
        fatherEmailId: this.state.fatherEmailId
      })
      .then(data => {
        console.log("data posted successfully");
      })
      .catch(err => {
        console.log("this is the following error", err);
      });
  };
  render() {
    return (
      <div>
        <div class="form-group input-block">
          <label>Name</label>
          <input
            type="text"
            ref="studentName"
            onChange={this.onChange}
            class="form-control"
            placeholder="Enter Names"
          />
        </div>
        <div class="form-group input-block">
          <label>Branch</label>
          <select ref="branch" onChange={this.onChange} class="form-control">
            <option>choose one of the following value</option>
            <option>CSE</option>
            <option>IT</option>
            <option>ECE</option>
            <option>EEE</option>
            <option>MBA</option>
            <option>BBA</option>
          </select>
        </div>
        <div class="form-group input-block">
          <label>Year</label>
          <select ref="year" onChange={this.onChange} class="form-control">
            <option>choose one of the following value</option>
            <option value={1}>1st</option>
            <option value={2}>2nd</option>
            <option value={3}>3rd</option>
            <option value={4}>4th</option>
          </select>
        </div>
        <div class="form-group input-block">
          <label>Section</label>
          <input
            type="text"
            ref="section"
            onChange={this.onChange}
            class="form-control"
            placeholder="Enter Section"
          />
        </div>
        <div class="form-group input-block">
          <label>Roll No</label>
          <input
            type="text"
            ref="rollNo"
            onChange={this.onChange}
            class="form-control"
            placeholder="Enter Roll no"
          />
        </div>
        <div class="form-group input-block">
          <label>Enrollment No</label>
          <input
            type="text"
            ref="enrollmentNo"
            onChange={this.onChange}
            class="form-control"
            placeholder="Enter Enrollment no"
          />
        </div>
        <div class="form-group input-block">
          <label>Group</label>
          <select ref="group" onChange={this.onChange} class="form-control">
            <option>choose one of the following value</option>
            <option>G1</option>
            <option>G2</option>
          </select>
        </div>
        <div class="form-group input-block">
          <label>Phone No</label>
          <input
            type="text"
            ref="phoneNo"
            onChange={this.onChange}
            class="form-control"
            placeholder="Enter Phone No"
          />
        </div>
        <div class="form-group input-block">
          <label>Email Id</label>
          <input
            type="text"
            ref="emailId"
            onChange={this.onChange}
            class="form-control"
            placeholder="Enter Email Id"
          />
        </div>
        <div class="form-group input-block">
          <label>Father's Name</label>
          <input
            type="text"
            ref="fatherName"
            onChange={this.onChange}
            class="form-control"
            placeholder="Enter Father's Name"
          />
        </div>
        <div class="form-group input-block">
          <label>Father's Phone Number</label>
          <input
            type="text"
            ref="fatherPhoneNo"
            onChange={this.onChange}
            class="form-control"
            placeholder="Enter Father's Phone No"
          />
        </div>
        <div class="form-group input-block">
          <label>Father's Email Id</label>
          <input
            type="text"
            ref="fatherEmailId"
            onChange={this.onChange}
            class="form-control"
            placeholder="Enter father's Email Id"
          />
        </div>
        <div class="form-group input-block">
          <label>Mother's Name</label>
          <input
            type="text"
            ref="motherName"
            onChange={this.onChange}
            class="form-control"
            placeholder="Enter Mother's Name"
          />
        </div>
        <div class="form-group input-block">
          <button className="btn btn-info " onClick={this.submitDetails}>
            Submit Student
          </button>
        </div>
      </div>
    );
  }
}
export default AddStudents;
