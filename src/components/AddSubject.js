import React, { Component } from "react";
import axios from "axios";
class addSubject extends Component {
  state = {};
  submitDetails = () => {
    axios
      .post("https://bpitconnect.herokuapp.com/subjects", this.state)
      .then(data => {
        alert("success");
      })
      .catch(err => {
        alert("failure");
        console.log(err);
        console.log(this.state);
      });
  };
  render() {
    return (
      <div>
        <div class="form-group input-block">
          <label>subjectId</label>
          <input
            type="text"
            ref="subjectId"
            onChange={() => {
              this.setState({ subjectId: this.refs.subjectId.value });
            }}
            class="form-control"
            placeholder="Enter subject Id"
          />
        </div>
        <div class="form-group input-block">
          <label>subjectCode</label>
          <input
            type="text"
            ref="subjectCode"
            onChange={() => {
              this.setState({ subjectCode: this.refs.subjectCode.value });
            }}
            class="form-control"
            placeholder="Enter subject Code"
          />
        </div>
        <div class="form-group input-block">
          <label>courseId</label>
          <input
            type="text"
            ref="courseId"
            onChange={() => {
              this.setState({ courseId: parseInt(this.refs.courseId.value) });
            }}
            class="form-control"
            placeholder="Enter course Id"
          />
        </div>
        <div class="form-group input-block">
          <label>subjectName</label>
          <input
            type="text"
            ref="subjectName"
            onChange={() => {
              this.setState({ subjectName: this.refs.subjectName.value });
            }}
            class="form-control"
            placeholder="Enter subject Name"
          />
        </div>
        <div class="form-group input-block">
          <label>lab</label>
          <input
            type="text"
            ref="lab"
            onChange={() => {
              this.setState({ lab: parseInt(this.refs.lab.value) });
            }}
            class="form-control"
            placeholder="Enter lab"
          />
        </div>
        <div class="form-group input-block">
          <label>credit</label>
          <input
            type="text"
            ref="credit"
            onChange={() => {
              this.setState({ credit: parseInt(this.refs.credit.value) });
            }}
            class="form-control"
            placeholder="Enter credit"
          />
        </div>
        <div class="form-group input-block">
          <label>isElective</label>
          <input
            type="text"
            ref="isElective"
            onChange={() => {
              this.setState({
                isElective: parseInt(this.refs.isElective.value)
              });
            }}
            class="form-control"
            placeholder="Enter isElective"
          />
        </div>
        <div class="form-group input-block">
          <label>isMandatory</label>
          <input
            type="text"
            ref="isMandatory"
            onChange={() => {
              this.setState({
                isMandatory: parseInt(this.refs.isMandatory.value)
              });
            }}
            class="form-control"
            placeholder="Enter Names"
          />
        </div>
        <div class="form-group input-block">
          <label>isTaught</label>
          <input
            type="text"
            ref="isTaught"
            onChange={() => {
              this.setState({ isTaught: parseInt(this.refs.isTaught.value) });
            }}
            class="form-control"
            placeholder="Enter Names"
          />
        </div>
        <div class="form-group input-block">
          <label>recommendedBook1</label>
          <input
            type="text"
            ref="recommandedBook1"
            onChange={() => {
              this.setState({
                recommandedBook1: this.refs.recommandedBook1.value
              });
            }}
            class="form-control"
            placeholder="Enter Recommended Books"
          />
        </div>
        <div class="form-group input-block">
          <label>recommendedBook2</label>
          <input
            type="text"
            ref="recommandedBook2"
            onChange={() => {
              this.setState({
                recommandedBook2: this.refs.recommandedBook2.value
              });
            }}
            class="form-control"
            placeholder="Enter Recommended Books"
          />
        </div>
        <div class="form-group input-block">
          <label>teacherId</label>
          <input
            type="text"
            ref="teacherId"
            onChange={() => {
              this.setState({ teacherId: this.refs.teacherId.value });
            }}
            class="form-control"
            placeholder="Enter teacherId"
          />
        </div>
        <button className="btn btn-info" onClick={this.submitDetails}>
          Submit Detalis
        </button>
      </div>
    );
  }
}
export default addSubject;
