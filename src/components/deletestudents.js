import React, { Component } from "react";
import axios from "axios";
class DeleteStudents extends Component {
  deleteStudent = () => {
    axios
      .get(
        "https://bpitconnect.herokuapp.com/students?enrollmentNo=" +
          this.refs.studentId.value
      )
      .then(data => {
        console.log(data.data);
        axios
          .delete(
            "https://bpitconnect.herokuapp.com/students/" + data.data[0].id
          )
          .then(data => {
            console.log("The  is deleted");
            alert("the given entry is deleted");
          })
          .catch(err => {
            console.log("some error is occured", err);
          });
      })
      .catch(err => {
        console.log("some error is occured", err);
      });
  };
  render() {
    return (
      <div>
        <div class="form-group input-block">
          <label>Enter Student Id</label>
          <input
            type="text"
            ref="studentId"
            class="form-control"
            placeholder="Enter StudentId"
          />
        </div>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          class="form-group input-block"
        >
          <button className="btn btn-info" onClick={this.deleteStudent}>
            Delete Student
          </button>
        </div>
      </div>
    );
  }
}

export default DeleteStudents;
