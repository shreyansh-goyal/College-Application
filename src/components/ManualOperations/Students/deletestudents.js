import React, { Component } from "react";
import {RedditTextField} from "../../FormElements/GeneralInput.js";
import axios from "axios";
import {inputArrayField} from "./DELETESTUDENTMANUALDATA.js"
class DeleteStudents extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      studentId:''
    }
  }
  onChange(e,name) {
    this.setState({ [name]: e.target.value });
  }

  deleteStudent = () => {
    console.log("hello I am shreyansh");
    axios.delete(
            "https://bpitconnect.herokuapp.com/students/" +this.state.studentId
          )
          .then(data => {
            console.log("The  is deleted",data);
            alert("the given entry is deleted");
          })
          .catch(err => {
            console.log("some error is occured", err);
          });
  };
  render() {
    return (
      <div>
        {
          inputArrayField.map(deleteField=>{
            return (
              <RedditTextField
              onChange={(e)=>{this.onChange(e,deleteField.changeField)}}
              label={deleteField.name}
              defaultValue=""
              value={this.state.studentId}
              variant="filled"
              id="reddit-input"
              />
            )
          })
        }
        <div
          style={{ display: "flex", justifyContent: "center" }}
          class="form-group input-block"
        >
          <button data-test="delete student" className="btn btn-info" onClick={this.deleteStudent}>
            Delete Student
          </button>
        </div>
      </div>
    );
  }
}

export default DeleteStudents;
